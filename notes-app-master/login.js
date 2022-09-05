
function toggleSignup() {
    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#48d1cc";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";

}

function toggleLogin() {
    document.getElementById("login-toggle").style.backgroundColor = "#48d1cc";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";

}


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDI0RofT1v7d0PeNQIdvILDADhGeUKSXTA",
    authDomain: "notes-app-2cc8b.firebaseapp.com",
    projectId: "notes-app-2cc8b",
    storageBucket: "notes-app-2cc8b.appspot.com",
    messagingSenderId: "667914377617",
    appId: "1:667914377617:web:67f7dbbd8954b0ea012230"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

function SignUp() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");

    promise
    .then(() =>{

      document.location.href="lpg.html";
  
    })
}


function signIn() {
    var email = document.getElementById("EMAIL");
    var password = document.getElementById("PASSWORD");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);

    promise
  .then(() =>{

    document.location.href="lpg.html";

  })
  .catch( (err) =>{
    alert("Invalid credentials");

  })
}
