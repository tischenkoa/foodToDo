import Vue from 'vue';

import VueFire from 'vuefire';
import VueMaterial from 'vue-material';
import VeeValidate from 'vee-validate';
import vClickOutside from 'v-click-outside';

import App from './App';
import router from './router';
import sideMenu from './components/sideMenu';
import Autocomplete from './components/autocomplete';
import Back from './components/back';
import firebase from './service/firebase';

Vue.config.productionTip = false;

Vue.use(VueFire);
Vue.use(VueMaterial);
Vue.use(VeeValidate);
Vue.use(vClickOutside);

Vue.material.registerTheme('default', {
  primary: 'light-green',
  accent: 'green',
  warn: 'red',
  background: 'white',
});

Vue.component('sideMenu', sideMenu);
Vue.component('autocomplete', Autocomplete);
Vue.component('back', Back);

const firebaseAuth = firebase.getFirebaseAuth();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    user: null,
  },
  router,
  template: '<App/>',
  components: {
    App,
  },
  mounted() {
    firebaseAuth.onAuthStateChanged(_user => {
      this.user = _user;
      if (this.user) {
        router.push('/list/food');
      } else {
        router.push('auth');
      }
      this.$root.$emit('preloader', false);
    });

    router.beforeEach((to, from, next) => {
      if (to.meta.withoutAuth || this.user) {
        next();
      } else {
        next('/auth');
      }
    });
  },
});
