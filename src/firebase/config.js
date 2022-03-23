import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB_LtZD1ztY7cvy6FHOSxuCrrBasCDeBXM',
  authDomain: 'money-book-403d8.firebaseapp.com',
  projectId: 'money-book-403d8',
  storageBucket: 'money-book-403d8.appspot.com',
  messagingSenderId: '229352226809',
  appId: '1:229352226809:web:85d9c106b57b9d9c388728',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
