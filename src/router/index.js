import Vue from 'vue';
import Router from 'vue-router';
import Food from '@/components/food';
import Other from '@/components/other';
import Todo from '@/components/todo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'food',
      component: Food,
    },
    {
      path: '/other',
      name: 'other',
      component: Other,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
    },
  ],
});
