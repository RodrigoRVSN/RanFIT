import { FirebaseOptions, initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGIN_SENDER_ID,
  appId: process.env.FB_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

const googleProvider = new GoogleAuthProvider()

export { app, auth, googleProvider }