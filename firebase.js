import * as firebase from 'firebase';
import '@firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnT23CRQofcdlUhgo8Qu5Dkr_EbyiQrH4",
    authDomain: "himachali-dhaba-2dff3.firebaseapp.com",
    databaseURL: "https://himachali-dhaba-2dff3.firebaseio.com",
    projectId: "himachali-dhaba-2dff3",
    storageBucket: "himachali-dhaba-2dff3.appspot.com",
    messagingSenderId: "77590120835",
    appId: "1:77590120835:web:6415cfd2446c7caeec8eb6",
    measurementId: "G-B0YY0F18EG"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


export default firebase;