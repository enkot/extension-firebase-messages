importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js')

// Your web app's Firebase configuration
const firebaseConfig = { /* Firebase config here */ }

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging()