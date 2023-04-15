import firebase from 'firebase';
import 'firebase/auth';

const config = firebase.default.initializeApp({
   apiKey: "AIzaSyC3_5VAc1SSuRyupdxDJcGup5ujHwzVO2g",
  authDomain: "exameasy-batch28-1a767.firebaseapp.com",
  databaseURL: "https://exameasy-batch28-1a767-default-rtdb.firebaseio.com",
  projectId: "exameasy-batch28-1a767",
  storageBucket: "exameasy-batch28-1a767.appspot.com",
  messagingSenderId: "544380108275",
  appId: "1:544380108275:web:75aa83c7f8d107909e6686",
  measurementId: "G-YS8ZZ6PNDS"
});

export const auth = firebase.auth();
export default config;

// dummy google form - https://forms.gle/L3fgGgU3Rm9r6dLh7 