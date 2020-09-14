// import firebase, { auth } from 'firebase';

// firebase.initializeApp({
//     apiKey: "AIzaSyBBkt-QQwskTVI_fjFxvtIQ13JrX3Q1Qo8",
//     authDomain: "clone-fe6ae.firebaseapp.com",
//     databaseURL: "https://clone-fe6ae.firebaseio.com",
//     projectId: "clone-fe6ae",
//     storageBucket: "clone-fe6ae.appspot.com",
//     messagingSenderId: "161248861502",
//     appId: "1:161248861502:web:5e9f512a988ff5c8a2a06f"
// })

// // const db = firebaseApp.fireStore()
// const auth2 = firebase.auth();

// // export { db, auth }
// export { auth2 }

import firebase, { auth } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBBkt-QQwskTVI_fjFxvtIQ13JrX3Q1Qo8",
    authDomain: "clone-fe6ae.firebaseapp.com",
    databaseURL: "https://clone-fe6ae.firebaseio.com",
    projectId: "clone-fe6ae",
    storageBucket: "clone-fe6ae.appspot.com",
    messagingSenderId: "161248861502",
    appId: "1:161248861502:web:5e9f512a988ff5c8a2a06f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth2 = firebase.auth();

export { db, auth2 }
