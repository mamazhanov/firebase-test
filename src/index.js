import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDLK3ymyb4So2voj3fznMjA9ofURnV0lbo",
  authDomain: "fir-way-fd0b9.firebaseapp.com",
  databaseURL: "https://fir-way-fd0b9-default-rtdb.firebaseio.com",
  projectId: "fir-way-fd0b9",
  storageBucket: "fir-way-fd0b9.appspot.com",
  messagingSenderId: "934256122556",
  appId: "1:934256122556:web:fcb4e161ca01800ec1ceb9"
}



firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
