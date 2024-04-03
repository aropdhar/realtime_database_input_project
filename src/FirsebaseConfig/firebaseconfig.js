import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuOodirPnZA-racw-8HZNiY_qkokRo1VY",
  authDomain: "inputproject-31f3d.firebaseapp.com",
  projectId: "inputproject-31f3d",
  storageBucket: "inputproject-31f3d.appspot.com",
  messagingSenderId: "633062136612",
  appId: "1:633062136612:web:38dbf1e9dbca6825c331b1",
  measurementId: "G-7SL2K5SDY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;