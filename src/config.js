import firebase from 'firebase';
import 'firebase/auth';

const config = firebase.default.initializeApp({
  apiKey: "AIzaSyD1V8KbO9c-A7b_sC1qM0FIHgs3qtK0GRk",
  authDomain: "exameasy-28.firebaseapp.com",
  databaseURL: "https://exameasy-28-default-rtdb.firebaseio.com",
  projectId: "exameasy-28",
  storageBucket: "exameasy-28.appspot.com",
  messagingSenderId: "179931156726",
  appId: "1:179931156726:web:22f1c994b7447b70e41cd7",
  measurementId: "G-X7QVPXK0L9"
});

export const auth = firebase.auth();
export default config;

// dummy google form - https://forms.gle/kCmFeZ1qDDt77Q179