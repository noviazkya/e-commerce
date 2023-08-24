import { createStore } from "vuex";
import auth from "./modules/auth";
import brands from "./modules/brands";
import product from "./modules/product";
import category from "./modules/category";

const store = createStore ({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        brands,
        product,
        category,
    },
});

export default store; 