import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';

export const firebaseConfig = {
    apiKey: "AIzaSyBVnNMK_TkoHCneiRpJHaHjmFq1RieCfbo",
    authDomain: "marioplan-93ca8.firebaseapp.com",
    databaseURL: "https://marioplan-93ca8.firebaseio.com",
    projectId: "marioplan-93ca8",
    storageBucket: "marioplan-93ca8.appspot.com",
    messagingSenderId: "751329258992",
    appId: "1:751329258992:web:23f14dabb295fd711f4135",
    measurementId: "G-N20GL649XQ"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export default firebase;