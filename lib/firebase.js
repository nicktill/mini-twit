import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


// config that links to our firebase instance 
// https://console.firebase.google.com/project/mini-twit-39e14/settings/general/web:MWIyN2U2ODUtZWU2NS00NGEyLTkxNGUtM2Q4OGFhOTU4NGE5
const firebaseConfig = {
    apiKey: "AIzaSyBWCgET163AC9_OsOkCS-y7nusEKwLRthQ",
    authDomain: "mini-twit-39e14.firebaseapp.com",
    projectId: "mini-twit-39e14",
    storageBucket: "mini-twit-39e14.appspot.com",
    messagingSenderId: "401251551774",
    appId: "1:401251551774:web:9466ae77ee0f3048963c0f",
    measurementId: "G-T86GR1LQWG"
};

//initialize the firebase app
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
