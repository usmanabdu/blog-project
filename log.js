const auth = firebase.auth();
const form = document.querySelector(".login-form");

const login = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userObject) => {
      if (!userObject.user.emailVerified) {
        alert("You need to verify your email address");
      } else {
        alert("Logged in as " + userObject.user.email + "Redirecting...email.");

        //redirecting user to home
        // window.location = "home.html";
      }
    })
    .catch((error) => {
      console.log(`${error}`);
    });
};

form.addEventListener("submit", () => {
  const email = document.getElementsByName("email")[0].value;
  const password = document.getElementsByName("password")[0].value;

  //   if (email.length > 0) {
  //   } else {
  //     login(email, password);
  //   }

  login(email, password);
});

// login("amalabshir20@hotmail.com", "qwerty");
