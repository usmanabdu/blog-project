const auth=firebase.auth()
const form = document.querySelector(".signup-form");

const signup=(email,password)=>{
auth
.createUserWithEmailAndPassword(email,password)
.then((userobject)=>{
    if(!userobject.user.emailverified) {
        console.log("you need to verified your email")
    }
})
.catch((error)=>{
console.log(error)
})
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;


    if (email.length< 0){
    } else {
     signup(email, password);
  }


})


