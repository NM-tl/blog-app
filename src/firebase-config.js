import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD45Nvop3wJ7Qm3dwGCcZAtqCi9eW4v9Wo",
    authDomain: "blog-c57b4.firebaseapp.com",
    projectId: "blog-c57b4",
    storageBucket: "blog-c57b4.appspot.com",
    messagingSenderId: "803714474998",
    appId: "1:803714474998:web:55b02880dde543f0211dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



