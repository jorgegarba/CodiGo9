import firebase from 'firebase';
require('firebase/auth')
var firebaseConfig = {
    apiKey: "AIzaSyBxqoBAWozQ8xq5dnIIBNDjwmT9dZicnP0",
    authDomain: "reservas-restaurante-eduardo.firebaseapp.com",
    databaseURL: "https://reservas-restaurante-eduardo.firebaseio.com",
    projectId: "reservas-restaurante-eduardo",
    storageBucket: "reservas-restaurante-eduardo.appspot.com",
    messagingSenderId: "333687563745",
    appId: "1:333687563745:web:c812a9fe6c4fadde151ea0",
    measurementId: "G-W9CJXN5300"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;