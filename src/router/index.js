import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import store from "../store";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true },
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
        meta: { requiresLogin: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/"); // redirect to home 
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login"); 
    } else {
        next();
    }
});

export default router; 