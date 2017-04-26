// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueFire from 'vuefire';
import VueMaterial from 'vue-material';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueFire);

Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'deep-orange',
  accent: 'red',
  warn: 'red',
  background: 'white',
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
