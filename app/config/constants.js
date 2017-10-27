import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBFI_RTl5I7iNMr8S5F2XkngfRPA5FK8oA",
  authDomain: "redux-tutorial-9b5f7.firebaseapp.com",
  databaseURL: "https://redux-tutorial-9b5f7.firebaseio.com",
  projectId: "redux-tutorial-9b5f7",
  storageBucket: "redux-tutorial-9b5f7.appspot.com",
  messagingSenderId: "22818012509"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();

export const firebaseAuth = firebase.auth();