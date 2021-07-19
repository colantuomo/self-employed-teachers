import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD55FI31n3HbUJJsdnnp3z9I5Wl7xDF_gc",
  authDomain: "digital-classroom-1.firebaseapp.com",
  projectId: "digital-classroom-1",
  storageBucket: "digital-classroom-1.appspot.com",
  messagingSenderId: "207283044478",
  appId: "1:207283044478:web:d2e0e88de58a02cadc582f",
  measurementId: "G-D7XH90CHX4",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const providers = {
  google,
};
firebase.analytics();
export { firebase, db, auth, providers };
