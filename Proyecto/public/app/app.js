var firebaseConfig = {
  apiKey: "AIzaSyDDkfsUqUBpqZfADtixTFQsEMC3Y8sxk2s",
  authDomain: "fir-uya-bb23c.firebaseapp.com",
  databaseURL: "https://fir-uya-bb23c.firebaseio.com",
  projectId: "fir-uya-bb23c",
  storageBucket: "fir-uya-bb23c.appspot.com",
  messagingSenderId: "566679812065",
  appId: "1:566679812065:web:bbc8817f3f1928bf2b84a0",
  measurementId: "G-X4R0DFF1DV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;
      //cada vez que cambia se cambia el texto en showuser
      document.getElementById("showuser").innerHTML = email_id.toString();

    }
  } else {
    // No user is signed in.
    //cada vez que cambia se cambia el texto en showuser
    document.getElementById("showuser").innerHTML = "Not logged in";

  }
});

function login() {
  
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(() => {
    window.alert("logged in successfully ");
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function registro() {
  
  var userEmail = document.getElementById("signup_email_field").value;
  var userPass = document.getElementById("signup_password_field").value;
  
    firebase.auth().createUserWithEmailAndPassword(userEmail.trim(), userPass).then(() => {
      window.alert("se ha Registrado correctamente");
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
    });

}

function logout() {
  firebase.auth().signOut();
}