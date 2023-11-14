import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO2zPH9KMIFLCi1v-H_Q6M-AxWk2xqzgg",
  authDomain: "linkedin-clone-dc4d2.firebaseapp.com",
  projectId: "linkedin-clone-dc4d2",
  storageBucket: "linkedin-clone-dc4d2.appspot.com",
  messagingSenderId: "206112231642",
  appId: "1:206112231642:web:c34911252a605fa1a055e3",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export  {db};