import Vue from 'vue';
import Router from 'vue-router';
import Food from '@/components/food';
import Other from '@/components/other';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/food',
      name: 'food',
      component: Food,
    },
    {
      path: '/other',
      name: 'other',
      component: Other,
    },
  ],
});
