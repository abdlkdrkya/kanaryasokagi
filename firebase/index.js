import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAc_U0-Ih4sQbrbOcARtURhPt4rYpaER98",
  authDomain: "kanaryasokagi-326605.firebaseapp.com",
  projectId: "kanaryasokagi-326605",
  storageBucket: "kanaryasokagi-326605.appspot.com",
  messagingSenderId: "904838209627",
  appId: "1:904838209627:web:2344a5f2c5436335d1df7e",
  measurementId: "G-DRXHHH2BMF",
};

const app = firebase.initializeApp(firebaseConfig);


const storage = app.storage()

export { storage };
