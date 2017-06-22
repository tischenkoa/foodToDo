import Vue from 'vue';
import Router from 'vue-router';
import List from 'components/list';
import Item from 'components/item';
import Auth from 'components/auth';
import Registration from 'components/registration';
import Main from 'components/main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/list/:list',
          name: 'list',
          component: List,
          props: true,
        },
        {
          path: '/list/:list/:itemId',
          name: 'item',
          component: Item,
          props: true,
        },
      ],
    },
    {
      path: '*',
      redirect: '/list/food',
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
  ],
});
