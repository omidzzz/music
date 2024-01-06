import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfsdjgE-FHYW4Hrd4pxJPCpwWquVqOSZU",
  authDomain: "music-fcfc2.firebaseapp.com",
  projectId: "music-fcfc2",
  storageBucket: "music-fcfc2.appspot.com",
  appId: "1:98606564989:web:a43374fe93e5d16317d314"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log('Firebase persistance error: ', error, error.code)
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
