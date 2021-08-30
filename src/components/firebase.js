import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCo8jycmVtMQEXgVwGWi122_QDkJS3ZpUs",
  authDomain: "authentication-developme-53952.firebaseapp.com",
  projectId: "authentication-developme-53952",
  storageBucket: "authentication-developme-53952.appspot.com",
  messagingSenderId: "868779052016",
  appId: "1:868779052016:web:8a8c7fccfe1534d1a0eb35"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;