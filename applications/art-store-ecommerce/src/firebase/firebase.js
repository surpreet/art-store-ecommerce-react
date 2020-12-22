import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiFVZ-98IJo3wK42uv97NNaku5jGsfy30",
  authDomain: "sample-project1-e970b.firebaseapp.com",
  databaseURL: "https://sample-project1-e970b.firebaseio.com",
  projectId: "sample-project1-e970b",
  storageBucket: "sample-project1-e970b.appspot.com",
  messagingSenderId: "215631952406",
  appId: "1:215631952406:web:29977c451436a724aa9337",
  measurementId: "G-84HX2Q1XQ7"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const firestore = app.firestore();
export const auth = app.auth();

