const model = {}
model.currentUser = undefined
model.collectionName = 'conversations'
model.currentConversation = undefined
model.conversations = undefined
model.currentFilm = undefined 
model.register = (firstName, lastName, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
    console.log(user)
    firebase.auth().currentUser.sendEmailVerification()
    firebase.auth().currentUser.updateProfile({
      displayName: firstName + ' ' + lastName
    })
    alert('Register success, please check your email!')
    view.setActiveScreen('loginScreen')
  }).catch((err) => {
    alert(err.message)
    console.log(err)
  })
}

model.login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    console.log(user)
    if(user.user.emailVerified) {
      model.currentUser = {
        displayName: user.user.displayName,
        email: user.user.email
      }
      view.setActiveScreen('HomeScreen')
    } else {
      alert('Please verify your email!')
    }
  }).catch((err) => {
    alert(err.message)
    console.log(err)
  })
}

model.loadConversations = () => {
  firebase.firestore().collection(model.collectionName).where('users','array-contains', model.currentUser.email).get().then(res => {
    const data = utils.getDataFromDocs(res.docs)
    model.conversations = data
    if (data.length > 0) {
      model.currentConversation = data[0]
      view.showCurrentConversation()
    }
    view.showCurrentConversation()
  })
}

model.addMessage = (message) => {
  const dataToUpdate = {
    messages  : firebase.firestore.FieldValue.arrayUnion(message),
  }
  firebase.firestore().collection(model.collectionName).doc(model.currentConversation.id).update(dataToUpdate)
}
model.listenConversationsChange = () =>{
  let isFirstRun = false
  firebase.firestore().collection(model.collectionName)
  .where('users' , 'array-contains', model.currentUser.email)
  .onSnapshot(res =>{
    if(!isFirstRun){
      isFirstRun = true
      return;
    }
    console.log(res);
    const docChanges = res.docChanges()
    console.log(docChanges);
    for(oneChange of docChanges) {
      const type = oneChange.type
      const oneChangeData = utils.getDataFromDoc(oneChange.doc)
      console.log(oneChange);
      if(type === 'modified' ){
        if(oneChangeData.id === model.currentConversation.id){
          model.currentConversation = oneChangeData
        view.addMessage(oneChangeData.messages[oneChangeData.messages.length - 1])
        }
        for (let i = 0; i < model.conversations.length; i++) {
          const element = model.conversations[i]
          if(element.id === oneChange.id){
            model.conversations[i] = oneChangeData
          }
          
        }        
      }
    }
  })
}