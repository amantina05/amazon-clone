import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC-N9q3EICi-BESZmJCe3btWfjmFtKf0uE',
  authDomain: 'clone-33d8a.firebaseapp.com',
  databaseURL: 'https://clone-33d8a.firebaseio.com',
  projectId: 'clone-33d8a',
  storageBucket: 'clone-33d8a.appspot.com',
  messagingSenderId: '445312195223',
  appId: '1:445312195223:web:c5e1eed0484abaec3ae7d2',
  measurementId: 'G-V32CJZ9JTQ',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

//dont forget to do npm i firebasae
