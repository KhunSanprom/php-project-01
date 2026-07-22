// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCdVRbmxkyCN4jyiOauU0hSaDsgcA_9SR4',
  authDomain: 'php-project-01-28047.firebaseapp.com',
  projectId: 'php-project-01-28047',
  storageBucket: 'php-project-01-28047.firebasestorage.app',
  messagingSenderId: '453505484667',
  appId: '1:453505484667:web:02e6942b0c1f6f671edfde',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
