// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp0Sy22LW9-so5kHsnmRBn_8FHk4bSNrg",
  authDomain: "clone-media-player-84ea4.firebaseapp.com",
  projectId: "clone-media-player-84ea4",
  storageBucket: "clone-media-player-84ea4.appspot.com",
  messagingSenderId: "430015146124",
  appId: "1:430015146124:web:b045f63acd995f8af3b3a9",
  measurementId: "G-1G3EDNL6R1"
};

// Initialize Firebase
let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;