import {initializeApp} from 'firebase/app';
import {} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBGrTSFpWKuPPN_c9iypuVjs8xyAdOn0Ds",
    authDomain: "crud-31b47.firebaseapp.com",
    databaseURL: "https://crud-31b47-default-rtdb.firebaseio.com",
    projectId: "crud-31b47",
    storageBucket: "crud-31b47.appspot.com",
    messagingSenderId: "790453160321",
    appId: "1:790453160321:web:81e60d6459b723580d8080",
    measurementId: "G-XC9R5TCGM3"
  };
  
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app);

  export {db};