import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDSjj5QOokYSxwrXgE8l6rWJjE3dO8gCuw",
  authDomain: "react-ec-2093f.firebaseapp.com",
  projectId: "react-ec-2093f",
  storageBucket: "react-ec-2093f.appspot.com",
  messagingSenderId: "15116174600",
  appId: "1:15116174600:web:bcdc2e17cb0c4eeaa398bd",
  measurementId: "G-Q3XY0233QG",
};

firebase.initializeApp(config);

export const createUserDoc = async (userAuth, otherData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const data = await userRef.get();
  if (!data.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({ displayName, email, createdAt, ...otherData });
    } catch (error) {
      console.log("Error", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
