import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import BootstrapVue from 'bootstrap-vue';
import VueLocalStorage from 'vue-localstorage';
import VueTheMask from 'vue-the-mask';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import Loading from 'vue-loading-overlay';

import 'vue-loading-overlay/dist/vue-loading.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueTheMask);
Vue.use(VueLocalStorage);
Vue.use(Vuetify);
Vue.use(VeeValidate);
Vue.use(Loading);

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
