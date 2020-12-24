import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5PmlukEjKnOHoapv25sPznO8_Hn_TT6s",
  authDomain: "robinhood--clone.firebaseapp.com",
  projectId: "robinhood--clone",
  storageBucket: "robinhood--clone.appspot.com",
  messagingSenderId: "34309522386",
  appId: "1:34309522386:web:3193bee48a80d41a08fe0b",
  measurementId: "G-Q9T3LXCDXL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
