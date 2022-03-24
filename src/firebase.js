// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBRY57HLUYneKTzGcIiHkV-4bdv80cNASo',
  authDomain: 'slack-clone-81083.firebaseapp.com',
  projectId: 'slack-clone-81083',
  storageBucket: 'slack-clone-81083.appspot.com',
  messagingSenderId: '338949198980',
  appId: '1:338949198980:web:63a29976c535d4ca445ed1',
  measurementId: 'G-2WMV015EXT',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
