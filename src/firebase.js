import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDALVRx1hyTpwApxQn8HHZWBP4HiGkxq4I",
    authDomain: "supermallwebapp-b6a7d.firebaseapp.com",
    projectId: "supermallwebapp-b6a7d",
    storageBucket: "supermallwebapp-b6a7d.firebasestorage.app",
    messagingSenderId: "875368221139",
    appId: "1:875368221139:web:43e9d883083cb5be320726",
    measurementId: "G-X31XRB8PP6"
  };
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();
  export const db = getFirestore(app);
  
