import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBFVVzwGNXbbdhfeV2mmdDSvv29diTBXX8",
    authDomain: "notes-app-f7429.firebaseapp.com",
    databaseURL: "https://notes-app-f7429-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "notes-app-f7429",
    storageBucket: "notes-app-f7429.appspot.com",
    messagingSenderId: "636804605498",
    appId: "1:636804605498:web:ce38e2a76c894755c03703"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase