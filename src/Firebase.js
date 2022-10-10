import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAqBXfJLWp2jj1Ga60d7heIzNnN0EHfXN0",
    authDomain: "mercuryjc-6ae7a.firebaseapp.com",
    projectId: "mercuryjc-6ae7a",
    storageBucket: "mercuryjc-6ae7a.appspot.com",
    messagingSenderId: "661765072689",
    appId: "1:661765072689:web:886a4827cd42b2a4a8f210",
    measurementId: "G-D88QPD7H7D"
  };
  
  // Initialize Firebase
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app()
  }
          
  export const firestore = firebase.firestore()
  export default firebase
  
