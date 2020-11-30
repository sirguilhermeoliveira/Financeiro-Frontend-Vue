
import Vue from 'vue'
import VueRouter from 'vue-router'
import despesas from './despesas/despesasprincipalnovas.vue'
import login from './login/login.vue'
import receitas from './receita/receita.vue'
import intermediorotas from './intermediorotas.vue'
import './axios.js';

Vue.use(VueRouter);

const routes = [
    { path: '/receitas', component: receitas},
    { path: '/despesas', component: despesas},
    { path: '/intermediorotas', component: intermediorotas},
    { path: '/login', component: login},
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(login),

  },

)
