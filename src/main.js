import Vue from 'vue';
import VueFire from 'vuefire';
import VueMaterial from 'vue-material';
import vClickOutside from 'v-click-outside';

import App from './App';
import router from './router';
import Autocomplete from './components/autocomplete';
import Back from './components/back';
import firebase from './service/firebase';

Vue.config.productionTip = false;

Vue.use(VueFire);
Vue.use(vClickOutside);

Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'light-green',
  accent: 'green',
  warn: 'red',
  background: 'white',
});

Vue.component('autocomplete', Autocomplete);
Vue.component('back', Back);

const firebaseAuth = firebase.getFirebaseAuth();
let user;

firebaseAuth.onAuthStateChanged(_user => {
  user = _user;
  console.log(_user);
});

router.beforeEach((to, from, next) => {
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
