
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBnae4_smXel1IixgWQo9gs1B-GNpHXQsE",
    authDomain: "tartaruga-5378b.firebaseapp.com",
    projectId: "tartaruga-5378b",
    storageBucket: "tartaruga-5378b.appspot.com",
    messagingSenderId: "913090189213",
    appId: "1:913090189213:web:abddaeb240b53c7134c174"
  };
  const app = initializeApp(firebaseConfig);


  export const auth = getAuth(app);
