import firebase from 'firebase';
import 'firebase/auth';

const config = firebase.default.initializeApp({
  apiKey: "AIzaSyBdGZWZqkoe4jNp4squp7IbdWT0sK_ov04",
  authDomain: "exameasy-cb3de.firebaseapp.com",
  databaseURL: "https://exameasy-cb3de-default-rtdb.firebaseio.com",
  projectId: "exameasy-cb3de",
  storageBucket: "exameasy-cb3de.appspot.com",
  messagingSenderId: "733409376286",
  appId: "1:733409376286:web:fc843173fefcead71f160f",
  measurementId: "G-0XKMKQKYEE"
});

export const auth = firebase.auth();
export default config;

// dummy google form - https://forms.gle/kCmFeZ1qDDt77Q179
// dummy google sheet - https://docs.google.com/spreadsheets/d/1hNznnbYY3r1thabwX4-Ng6Y2zz3mtbAk3hJQlXYoNas/edit?usp=sharing 