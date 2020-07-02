const firebaseConfig = {
    apiKey: "AIzaSyAtBSfn1C6EoYUOFq5e_pd_HHHBtl2Z1h4",
    authDomain: "uya-joel-carla.firebaseapp.com",
    databaseURL: "https://uya-joel-carla.firebaseio.com",
    projectId: "uya-joel-carla",
    storageBucket: "uya-joel-carla.appspot.com",
    messagingSenderId: "42826357311",
    appId: "1:42826357311:web:17c2b45c2300d27831f68a",
    measurementId: "G-LX4TYGY31P"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
     
      var user = firebase.auth().currentUser;
  
      if (user != null) {
  
        var email_id = user.email;
        
        document.getElementById("showuser").innerHTML = email_id.toString();
  
      }
    } 
  });
  
  function login() {
    
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(() => {
      window.alert("Bienvenido/a! Ha accedido satisfactoriamente");
      window.location.href = "index.html";
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function registro() {
    
    var userEmail = document.getElementById("signupemail").value;
    var userPass = document.getElementById("signuppassword").value;
    
      firebase.auth().createUserWithEmailAndPassword(userEmail.trim(), userPass).then(() => {
        window.alert("Se ha Registrado correctamente");
        window.location.href = "index.html";
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
  
        window.alert("Error : " + errorMessage);
      });
  
  }
  
  function logout() {
    firebase.auth().signOut();
    window.alert("Ha cerrado satisfactoriamente. Hasta pronto!");
    window.location.href = "index.html";
  }