import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIfmyBN0zAr8qwmo1l47AgPvg9yHwpfgE",
    authDomain: "todo-app-a3924.firebaseapp.com",
    projectId: "todo-app-a3924",
    storageBucket: "todo-app-a3924.appspot.com",
    messagingSenderId: "438562445657",
    appId: "1:438562445657:web:28a05d3e686a551d185448",
    measurementId: "G-G52DS77GG8"
}

firebase.initializeApp(firebaseConfig)

export default firebase
