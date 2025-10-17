// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCobk80FkFUgqOxAxdz3YRRe8c5jEu_kfQ",
  authDomain: "netflixgpt-53378.firebaseapp.com",
  projectId: "netflixgpt-53378",
  storageBucket: "netflixgpt-53378.firebasestorage.app",
  messagingSenderId: "924823982325",
  appId: "1:924823982325:web:6fd3318240ca7b7efaf5bc",
  measurementId: "G-HL9Q458QWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();