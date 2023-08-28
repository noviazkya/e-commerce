import axios from "axios";

const product = {
  namespaced: true,
  state: {
    productData: [],
    singleProduct: [],
    cart:[]
  },

  getters: {
    getProducts: (state) => state.productData,

    //   get single product
    getProductBySlug: (state) => (productSlug) => {
      console.log("Fetching single product by slug:", productSlug);
      console.log("ProductData:", state.singleProduct);
      const product = state.singleProduct;
      console.log("Product:", product);
      return product;
    },

    // get filter product
    getProductByCategory: (state) => (productCategory) => {
      const product = state.productData.filter(
        (p) => p.category == productCategory
      );
      console.log(productCategory);
      console.log(product);
      return product;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get(
          "https://ecommerce.olipiskandar.com/api/v1/product/latest/8"
        );
        commit("SET_PRODUCTS", data.data["data"]);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    // get single product
    async fetchSingleProduct({ commit }, productSlug) {
      try {
        const response = await axios.get(
          `https://ecommerce.olipiskandar.com/api/v1/product/details/${productSlug}`
        );
        commit("SET_SINGLE_PRODUCT", response.data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async addToCart({ commit }, productId) {
            try {
              const response = await axios.post(
                "https://ecommerce.olipiskandar.com/api/v1/carts/add",
                {
                    "variation_id": productId,
                    "qty":  1,
                    "temp_user_id": null,
                }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
                });
                commit("ADD_TO_CART", response.data)
                console.log(response.data)
            } catch (error) {
              console.error(error);

            }
          },

    // get product filter by category
    // async fetchFilterProduct({ commit }, productCategory) {
    //   try {
    //     const response = await axios.get(
    //       `https://fakestoreapi.com/products/category/${productCategory}`
    //     );
    //     commit("SET_FILTER_PRODUCT", response.data);
    //   } catch (error) {
    //     alert(error);
    //     console.log(error);
    //   }
    // },
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.productData = products;
    },
    SET_SINGLE_PRODUCT(state, product) {
      state.singleProduct = product;
    },

    ADD_TO_CART(state, cart) {
            state.cart = cart
        },

    // SET_FILTER_PRODUCT(state, product) {
    //   state.filterProduct = product;
    // },
  },
};

export default product; 