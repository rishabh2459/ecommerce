// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const StartFirebase=()=>{
  const firebaseConfig = {
    apiKey: "AIzaSyDqoQHkh-5FfZHB2Ow7pP1Ns0D1vtqP0oA",
    authDomain: "ecommerce-website-750ba.firebaseapp.com",
    databaseURL: "https://ecommerce-website-750ba-default-rtdb.firebaseio.com",
    projectId: "ecommerce-website-750ba",
    storageBucket: "ecommerce-website-750ba.appspot.com",
    messagingSenderId: "891831020060",
    appId: "1:891831020060:web:a92e35f9f13b81223dcdd9",
    measurementId: "G-NBBVGSTHE7"
  };

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}



// Initialize Firebase

// const analytics = getAnalytics(app);

export default StartFirebase;