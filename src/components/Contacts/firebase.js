import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// if (!firebase.apps.length) {
//   firebase.initializeApp(clientCredentials);
// }



const firebaseConfig = {
  apiKey: "AIzaSyCcp3gAzPuOCanZdIncUSFtRIN5-KnwS24",
  authDomain: "tutorial-15a8f.firebaseapp.com",
  projectId: "tutorial-15a8f",
  storageBucket: "tutorial-15a8f.appspot.com",
  messagingSenderId: "658937996764",
  appId: "1:658937996764:web:9f605d0cafa4eaaccf1b19",
  measurementId: "G-FLFFRER1R1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
