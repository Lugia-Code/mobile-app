import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const APPID = process.env.EXPO_PUBLIC_APPID;
const MEASUREMENTID = process.env.EXPO_PUBLIC_MEASUREMENTID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "tracking-code-7d412.firebaseapp.com",
  projectId: "tracking-code-7d412",
  storageBucket: "tracking-code-7d412.firebasestorage.app",
  messagingSenderId: "507146324719",
  appId: APPID,
  measurementId: MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app);

export { auth };
