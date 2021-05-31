 import  firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCfYbS1ViuQ44RTdu_hprRRTeQk-qNZfWE",
  authDomain: "instapound-e84cb.firebaseapp.com",
  projectId: "instapound-e84cb",
  storageBucket: "instapound-e84cb.appspot.com",
  messagingSenderId: "1898808251",
  appId: "1:1898808251:web:d849a16686a89137933a9e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();
 const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 export { projectStorage, projectFirestore, timestamp };