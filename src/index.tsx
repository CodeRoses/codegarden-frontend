import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "codegarden-55736.firebaseapp.com",
  projectId: "codegarden-55736",
  storageBucket: "codegarden-55736.appspot.com",
  messagingSenderId: "11060574706",
  appId: "1:11060574706:web:2af7d94330390f24b8936b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
