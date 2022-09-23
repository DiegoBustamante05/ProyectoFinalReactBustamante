import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBoGaI9G5MnpEzT3m48042-hfL-pfJMvYs",
    authDomain: "bahiacriptomining.firebaseapp.com",
    projectId: "bahiacriptomining",
    storageBucket: "bahiacriptomining.appspot.com",
    messagingSenderId: "378191972000",
    appId: "1:378191972000:web:24178c04296f1bff68ebc5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


