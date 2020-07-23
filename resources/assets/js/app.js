
window.Vue = require('vue');

import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

window.VueRouter = VueRouter;

require('./app/app.vue.js');
