//import firebase from './service/firebase';

export default {
  name: 'auth',
  data() {
    return {
      conditions: {},
    };
  },
  methods: {
    signIn() {
      console.log('signIn', this.conditions);
    },
  },
};
