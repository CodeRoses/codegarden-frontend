import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2K0S5q5t3Lbbssvmj-jxg2tq2NmcfUpo",
  authDomain: "codegarden-55736.firebaseapp.com",
  projectId: "codegarden-55736",
  storageBucket: "codegarden-55736.appspot.com",
  messagingSenderId: "11060574706",
  appId: "1:11060574706:web:2af7d94330390f24b8936b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    user.getIdToken().then((token) => localStorage.setItem("token", token));
    // ...
  } else {
    // User is signed out
    // ...
    localStorage.removeItem("token");
  }
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
