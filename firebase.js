import * as firebase from 'firebase';
import '@firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBtgUFlPlGCZR8IT-vEHtSbWCaDgehiLrc",
    authDomain: "himachali-dhaba.firebaseapp.com",
    databaseURL: "https://himachali-dhaba.firebaseio.com",
    projectId: "himachali-dhaba",
    storageBucket: "himachali-dhaba.appspot.com",
    messagingSenderId: "79094582859",
    appId: "1:79094582859:web:8bc44c57853191615647ce",
    measurementId: "G-2TD1KJWDY3"
};
firebase.initializeApp(firebaseConfig);
export default firebase;