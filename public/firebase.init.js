// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaAqEJKfJNlH51z62Rq7CCBpGvy-n_Lag",
  authDomain: "my-portfolio-1b388.firebaseapp.com",
  projectId: "my-portfolio-1b388",
  storageBucket: "my-portfolio-1b388.appspot.com",
  messagingSenderId: "438187767503",
  appId: "1:438187767503:web:fbc902167bcede36fda9ba",
  measurementId: "G-VKL3TNRHQK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
