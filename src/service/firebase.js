import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBRkJNYviFmRRBHSpHX5Q7ffqk8xes4yNg',
  authDomain: 'tiar-food.firebaseapp.com',
  databaseURL: 'https://tiar-food.firebaseio.com',
  projectId: 'tiar-food',
  storageBucket: 'tiar-food.appspot.com',
  messagingSenderId: '392737220794',
};

export default {
  getDB() {
    const app = Firebase.initializeApp(config);
    return app.database();
  },
};
