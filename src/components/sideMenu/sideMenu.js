import fbService from 'service/firebase';

const firebaseAuth = fbService.getFirebaseAuth();

export default {
  name: 'sideMenu',
  methods: {
    signOut() {
      firebaseAuth.signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    },
    toggleLeftSidenav() {
      console.log('hii');
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    },
  },
};
