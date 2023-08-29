import { createStore } from "vuex";
import auth from "./modules/auth";
import brands from "./modules/brands";
import product from "./modules/product";
import category from "./modules/category";
import cart from "./modules/cart";
import order from "./modules/order";
const store = createStore ({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        brands,
        product,
        category,
        cart,
        order
    },
});

export default store;  