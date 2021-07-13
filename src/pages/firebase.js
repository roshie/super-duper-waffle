import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDA2w_7Et-q1RnFyX0u5GeuhdVvLEMPj_I",
  authDomain: "todolist-12ffd.firebaseapp.com",
  projectId: "todolist-12ffd",
  storageBucket: "todolist-12ffd.appspot.com",
  messagingSenderId: "1028789212266",
  appId: "1:1028789212266:web:48ff05d1fe410c80ab2613",
  measurementId: "G-DWZQDPE3XH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();