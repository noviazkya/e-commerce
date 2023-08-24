import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Brands from "../views/Brands.vue";
import Category from "../views/Category.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Contact from "../views/Contact.vue";
import Profile from "../views/Profile.vue";
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
        path: "/register",
        name: "Register",
        component: Register,
        meta: { requiresGuest: true },
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
        meta: { requiresLogin: true }
    },
    {
        path: "/brands",
        name: "Brands",
        component: Brands,
        meta: { requiresLogin: true }
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
        meta: { requiresLogin: true }
    },
    {
        path: "/product/:slug",
        name: "SingleProduct",
        component: SingleProduct,
        props: true,
        meta: { requiresLogin: true }
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: { requiresLogin: true }
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        meta: { requiresLogin: true }
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: { requiresLogin: true }
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: { requiresLogin: true }
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