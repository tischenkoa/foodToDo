import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/list';
import Item from '@/components/item';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:list',
      name: 'list',
      component: List,
      props: true,
    },
    {
      path: '/:list/:itemId',
      name: 'item',
      component: Item,
      props: true,
    },
    {
      path: '*',
      redirect: '/food',
    },
  ],
});
