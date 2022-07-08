// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_9YaiNjX_VDR2BJ2t1Aco6_iyiOzhSLM",
  authDomain: "et-ags.firebaseapp.com",
  databaseURL: "https://et-ags-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "et-ags",
  storageBucket: "et-ags.appspot.com",
  messagingSenderId: "788194582579",
  appId: "1:788194582579:web:6f0dda9814f59dafca4346",
  measurementId: "G-14TNT9GWBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
