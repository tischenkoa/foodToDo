import firebase from 'service/firebase';

export default {
  name: 'auth',
  data() {
    return {
      condition: {},
    };
  },
  methods: {
    signUp() {
      firebase.getFirebaseAuth().createUserWithEmailAndPassword(this.condition.email, this.condition.password)
        .catch((error) => {
          this.$root.$emit('notification', error.message);
        });
    },
  },
};
