import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import(/* webpackChunkName: "about" */ './views/SignUp/SignUp.vue'),
    },
    {
      path: '/cadastro/confirmacao',
      name: 'confirmacao',
      component: () => import(/* webpackChunkName: "about" */ './views/SignUp/Confirm.vue'),
    },
    {
      path: '/submissao',
      name: 'submissao',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
    },
  ],
});
