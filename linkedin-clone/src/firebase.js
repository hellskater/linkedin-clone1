import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBc5CNrB5W3JD7ZyIda0DpWChu2mtYL84E",
  authDomain: "linkedin-clone-sonny-a930c.firebaseapp.com",
  projectId: "linkedin-clone-sonny-a930c",
  storageBucket: "linkedin-clone-sonny-a930c.appspot.com",
  messagingSenderId: "57995941086",
  appId: "1:57995941086:web:f6fcb93ca3ba83701f9e4f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
