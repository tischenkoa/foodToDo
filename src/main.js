import Vue from 'vue';
import VueFire from 'vuefire';
import VueMaterial from 'vue-material';

import App from './App';
import router from './router';
import Autocomplete from './components/autocomplete';

Vue.config.productionTip = false;

Vue.use(VueFire);

Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'light-green',
  accent: 'green',
  warn: 'red',
  background: 'white',
});

Vue.component('autocomplete', Autocomplete);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
