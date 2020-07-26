const view = {};
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      const registerForm = document.getElementById("form-register");
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const registerInfo = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        controller.register(registerInfo);
      });
      const redirectToLogin = document.getElementById("redirect-to-login");
      redirectToLogin.addEventListener("click", (e) => {
        view.setActiveScreen("loginScreen");
      });
      break;
    case "loginScreen":
      document.getElementById("app").innerHTML = components.loginScreen;
      const loginForm = document.getElementById("form-login");
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(loginInfo);
      });
      document
        .getElementById("redirect-to-register")
        .addEventListener("click", (e) => {
          view.setActiveScreen("registerScreen");
        });
      break;
    case "HomeScreen":
      document.getElementById("app").innerHTML = components.HomeScreen;
      if (model.currentUser.email) {
        document.getElementById("welcome").innerHTML =
          model.currentUser.displayName;
        document.getElementById("SingInBtn").style.display = "none";
        document.getElementById("logout").innerText = "Log out";
      } else if (model.currentUser.email !== "quanganh406@gmail.com") {
        document.getElementById("SingInBtn").innerText = "Sign In";
        document.getElementById("logout").innerText = "Sign Up";
      }
      var logoutBtn = document.getElementById("SingInBtn");
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        firebase.auth().signOut();
        view.setActiveScreen("loginScreen");
      });
      var logoutBtn = document.getElementById("logout");
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        firebase.auth().signOut();
        view.setActiveScreen("loginScreen");
      });
      model.loadConversations();
      break;
    case "details":
   
      document.getElementById("app").innerHTML = components.details;
      // document.getElementById("web-film").style.background = `url(${model.currentFilm.bgFilm})`;
      document.getElementById("list-films").innerHTML = model.currentFilm.content;
      document.getElementById("list-image").innerHTML = `<img src="${model.currentFilm.image}" >`;
      document.getElementById("list-video").innerHTML = model.currentFilm.video;
      document.getElementById("list-name").innerHTML = model.currentFilm.Name;
      document.getElementById("list-title").innerHTML = model.currentFilm.title;
      document.getElementById("des").innerHTML = model.currentFilm.des;
      var home = document.getElementById("home");
      home.addEventListener("click", (e) => {
        view.setActiveScreen("HomeScreen");
      });
      // document.getElementById('go').addEventListener('click', (e) => {
      //   view.setActiveScreen('details')
      // })
      break;
  }
};
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message;
};
view.addMessage = (message) => {
  const filmWrapper = document.createElement("div");
  filmWrapper.classList.add("message");
  if (model.currentUser.email === message.owner) {
    filmWrapper.innerHTML = `
    <a id="go" href="#"><img src="${message.image}"></a>
    <h3>${message.content}</h3>
    <p>${message.Name}</p>
    <p>${message.title}</p>
    `;
  } else if (model.currentUser.email !== "quanganh406@gmail.com") {
    filmWrapper.innerHTML = `
    <a id="go" href="#"><img src="${message.image}"></a>
    <h3>${message.content}</h3>
    <p>${message.Name}</p>
    <p>${message.title}</p>
    `;
  }
  const listMessage = document.querySelector(".list-film");
  listMessage.appendChild(filmWrapper);
  filmWrapper.addEventListener("click", (e) => {
    model.currentFilm = message;
    view.setActiveScreen("details");
  });
};

view.showCurrentConversation = () => {
  document.querySelector(".list-film").innerHTML = "";
  for (let oneMessage of model.currentConversation.messages) {
    view.addMessage(oneMessage);
  }
};

document.getElementById("list-films").innerHTML = `${message.Name}`;
 


view.showConversation = () => {
  for (oneConversation of model.conversations) {
    view.addConversation(oneConversation);
  }
};
view.addConversation = (conversation) => {
  const conversationWrapper = document.createElement("div");
  conversationWrapper.classList.add("conversation");
  if (conversation.id === model.currentConversation.id) {
    conversationWrapper.classList.add("current");
  }
  conversationWrapper.innerHTML = `
  <div class="conversation-title">${conversation.title}</div>
  <div class="conversation-num-users">${conversation.users.length} users </div>
  `;
  document.querySelector("list-conversations", appendChild(conversation));
};
