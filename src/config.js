import firebase from 'firebase';
import 'firebase/auth';

const config = firebase.default.initializeApp({
    apiKey: "AIzaSyCwb4QPs6wpiSoXa9kzpz4tBG03VfUpfds",
    authDomain: "exameasy-2fe2e.firebaseapp.com",
    databaseURL: "https://exameasy-2fe2e-default-rtdb.firebaseio.com",
    projectId: "exameasy-2fe2e",
    storageBucket: "exameasy-2fe2e.appspot.com",
    messagingSenderId: "503971528272",
    appId: "1:503971528272:web:115a35bdcfd1b87b391b55",
    measurementId: "G-ZJC9WMHGSF"
});

export const auth = firebase.auth();
export default config;

// for details - https://console.firebase.google.com/project/exameasy-2fe2e/settings/general/web:NWEzNDMzMjMtNzBjNS00ZTY0LTgwNDktYjkxM2IzNThhZjI3
// dummy google form - https://forms.gle/L3fgGgU3Rm9r6dLh7 