import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBRkJNYviFmRRBHSpHX5Q7ffqk8xes4yNg',
  authDomain: 'tiar-food.firebaseapp.com',
  databaseURL: 'https://tiar-food.firebaseio.com',
  projectId: 'tiar-food',
  storageBucket: 'tiar-food.appspot.com',
  messagingSenderId: '392737220794',
};

const app = Firebase.initializeApp(config);
const db = app.database();
const auth = app.auth();

export default {
  getDB() {
    return db;
  },
  getFirebaseAuth() {
    return auth;
  },
  getGoogleAuth() {
    const provider = new Firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
    return auth.getRedirectResult();
  },
  getCurrentUser() {
    return auth.currentUser;
  },
};
