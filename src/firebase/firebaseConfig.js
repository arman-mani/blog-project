// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0npoBjXnZJGigxRGsAmqkilnn4vcVrYI",
  authDomain: "blog-b25.firebaseapp.com",
  projectId: "blog-b25",
  storageBucket: "blog-b25.appspot.com",
  messagingSenderId: "756998295256",
  appId: "1:756998295256:web:77cda385e760317ac991ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };