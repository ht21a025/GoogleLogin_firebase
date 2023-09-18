import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYvVE4dkXp9Is11hYrN7XA-nWbqQdMy34",
  authDomain: "login-app-4381d.firebaseapp.com",
  projectId: "login-app-4381d",
  storageBucket: "login-app-4381d.appspot.com",
  messagingSenderId: "352263491718",
  appId: "1:352263491718:web:214790711cab59fc694107"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };