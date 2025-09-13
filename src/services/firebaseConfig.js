import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL-V5syItg0Iz4mQcKPjxo3v6vt9lIUlQ",
  authDomain: "tracking-code-7d412.firebaseapp.com",
  projectId: "tracking-code-7d412",
  storageBucket: "tracking-code-7d412.firebasestorage.app",
  messagingSenderId: "507146324719",
  appId: "1:507146324719:web:a5b6067d895e17c260a91a",
  measurementId: "G-N7EWK2PGVE",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app);

export { auth };
