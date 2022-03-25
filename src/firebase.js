// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVClkID372PNw3yr-bL6LKQfPJ07FcTUs",
  authDomain: "yegor-codes.firebaseapp.com",
  projectId: "yegor-codes",
  storageBucket: "yegor-codes.appspot.com",
  messagingSenderId: "1092465359078",
  appId: "1:1092465359078:web:a860010e50bf12fc6c2327",
  measurementId: "G-QB7S31S9R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);