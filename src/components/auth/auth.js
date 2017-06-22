import firebase from 'service/firebase';

export default {
  name: 'auth',
  data() {
    return {
      condition: {},
    };
  },
  methods: {
    signIn() {
      firebase.getFirebaseAuth().signInWithEmailAndPassword(this.condition.email, this.condition.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    },
  },
};
