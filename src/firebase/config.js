 import  firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBVJ_j_3mwSQ0m02TnRXLvwX31TFgObPEE",
    authDomain: "cm-firegram.firebaseapp.com",
    projectId: "cm-firegram",
    storageBucket: "cm-firegram.appspot.com",
    messagingSenderId: "371066795115",
    appId: "1:371066795115:web:803ad2a3842dd67dc1ed2e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 const projectStorage = firebase.storage();
 const projectFirestore = firebase.projectFirestore;
 const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 export { projectStorage, projectFirestore, timestamp };