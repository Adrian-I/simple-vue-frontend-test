
import VueRouter from 'vue-router';

var Homepage = require('../components/homepage.vue').default,
    Users    = require('../components/users.vue').default;

var routes = [

    {
        path: '/',
        component: Homepage,
        //redirect : '/homepage',
    },
    {
        path: '/users',
        component: Users,
    },
];

var Router = new VueRouter({
    routes: routes
});

/*
 * Exports
 */
window.Router = Router;