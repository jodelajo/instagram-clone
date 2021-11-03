/* eslint-disable no-unused-vars */
import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyA2tOkYzZtOui9om8Xg2AGSFvW_h_KhrI4',
  authDomain: 'instagram-15522.firebaseapp.com',
  projectId: 'instagram-15522',
  storageBucket: 'instagram-15522.appspot.com',
  messagingSenderId: '725157867411',
  appId: '1:725157867411:web:8735331d4f6ac3ec3b8266'
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// console.log('firebase', firebase);
// seedDatabase(firebase);

export { firebase, FieldValue };
