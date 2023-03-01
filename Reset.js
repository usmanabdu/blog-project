const auth = firebase.auth();

const reset_password = (email) => {
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log(`Password reset link sent to ${email}`);
    })
    .catch((err) => {
      console.log(err);
    });
};


