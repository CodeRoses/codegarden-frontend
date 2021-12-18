import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import axios from "axios";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "codegarden-55736.firebaseapp.com",
  projectId: "codegarden-55736",
  storageBucket: "codegarden-55736.appspot.com",
  messagingSenderId: "11060574706",
  appId: "1:11060574706:web:2af7d94330390f24b8936b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
