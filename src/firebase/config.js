import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAoXUrSY8cBepnI4In6Sa8yNJfsD2d2HyY',
    authDomain: 'chatroom-eadfd.firebaseapp.com',
    projectId: 'chatroom-eadfd',
    storageBucket: 'chatroom-eadfd.appspot.com',
    messagingSenderId: '472245469365',
    appId: '1:472245469365:web:540f972738d7d0e8c77efc',
    measurementId: 'G-BFCVJYL8M3',
}

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { projectAuth, projectFirestore, timestamp }
