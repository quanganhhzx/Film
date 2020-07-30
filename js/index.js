window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyA3DTU4hydEexX86nSVNl7Kemt8jX3ObYg",
    authDomain: "chat-js44.firebaseapp.com",
    databaseURL: "https://chat-js44.firebaseio.com",
    projectId: "chat-js44",
    storageBucket: "chat-js44.appspot.com",
    messagingSenderId: "274964083599",
    appId: "1:274964083599:web:e6ad6c520eb12ded9951fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  // templateQueryDatabase()
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    if(user) {
      if (user.emailVerified) {
        model.currentUser = {
          displayName: user.displayName,
          email: user.email
        }
        view.setActiveScreen('HomeScreen')
      } else {
        view.setActiveScreen('loginScreen')
        alert('Please verify your email')
      }
    } else {
      view.setActiveScreen('loginScreen')
    }
  })
}

templateQueryDatabase = () => {
  const docId = 'tWCAawI6PiKYTjGqzkQa'
  // get one
  firebase.firestore().collection('users').doc(docId).get().then(res => {
    console.log(getDataFromDoc(res))
  }).catch(err => {
    console.log(err)
  })
  // get many
  firebase.firestore().collection('users').where('age','==',20).get().then(res => {
    console.log(res)
    // console.log(getDataFromDoc(res.docs[0]))
    console.log(getDataFromDocs(res.docs))
  })

  // create
  const dataToCreate = {
    name: 'Create',
    age: 18,
    email: 'quanganh@gmail.com',
    phoneNumber: ['0123123123']
  }
  // firebase.firestore().collection('users').add(dataToCreate).then(res => {
  //   alert('Added!')
  // })
  // update
    const docIdUpdate = '4inNoaCGHdmeajDDphBM'
    const dataToUpdate = {
      age: 20,
      address: 'HN',
      phones: firebase.firestore.FieldValue.arrayUnion('0123345121233')
    }
    firebase.firestore().collection('users').doc(docIdUpdate).update(dataToUpdate).then(res => {
      // alert('Updated!')
    })
  // delete
    // const docIdDelete = 'TDcT8KuN776GPZoCqamU'
    // firebase.firestore().collection('users').doc(docIdDelete).delete().then(res => {
    //   // alert('Deleted!')
    // })
}
