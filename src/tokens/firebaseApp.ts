import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgm9Lu8T2HvASNdO8DTlu_YeIE4oipXq8",
  authDomain: "quizzle-195ad.firebaseapp.com",
  projectId: "quizzle-195ad",
  storageBucket: "quizzle-195ad.appspot.com",
  messagingSenderId: "186446635008",
  appId: "1:186446635008:web:902e53d3979e9dc711f8e5"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
