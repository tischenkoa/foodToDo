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
      firebase.getFirebaseAuth().
        signInWithEmailAndPassword(this.condition.email, this.condition.password).catch((error) => {
        this.$root.$emit('notification', error.message);
      });
    },
  },
};
