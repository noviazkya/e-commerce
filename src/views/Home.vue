<template>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <section class="mx-auto  py-16">
  <div class="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
    <div class="text-center">
        <h2 class="bg-clip-text text-3xl font-extrabold text-gray-700 sm:text-5xl">Mega Sale!</h2>
        <br>
        <p class="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">Let's shopping to our heart's content.</p>
        <a href="/product" class="shadow-pink-600/30 mt-10 inline-flex h-12 items-center rounded-full bg-pink-500 px-6 py-3 text-xl font-light text-white shadow-md transition hover:translate-y-1 hover:scale-105 hover:bg-pink-600 hover:shadow-lg">𝘝𝘪𝘦𝘸 𝘱𝘳𝘰𝘥𝘶𝘤𝘵</a>
    </div>
  </div>
</section>

<p class="text-gray-500 dark:text-gray-400"></p>
<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-400 border-0 rounded dark:bg-gray-700">
    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg class="w-4 h-4 text-gray-700 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </div>
</div>

 <!-- section 2 -->
 <br>
 <br>
 <br>
 <br>
 <section class="w-max-full">
  <div class="container mx-auto bg-pink-100 p-10">
    <span class="text-3xl font-semibold text-gray-800">𝙊𝙪𝙧 𝙢𝙖𝙞𝙣 𝙥𝙧𝙤𝙙𝙪𝙘𝙩</span>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="product in getProducts.slice(0,4)" :id="product.id" class="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
  <router-link :to="{ name: 'SingleProduct', params: { slug: product.slug } }" class="relative flex h-60 overflow-hidden">
    <img class="absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80" alt="product image" />
  </router-link>
    <div class="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
      <button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

  <div class="mt-4 px-5 pb-5">
    
      <h5 class="text-xl tracking-tight text-slate-900">{{ product.name }}</h5>
  
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-2xl font-bold text-slate-900">{{ product.base_price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}) }}</span>
        
      </p>
    </div>
  </div>
</div>

    </div>
  </div>
 </section>
</template> 
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('product', ['getProducts']),
    },
    methods: {
        ...mapActions('product', ['fetchProducts']),
        // getImage(imageURL) {
        //     return {
        //         'src': `${imageURL}`,
        //         'background-size': 'cover',
        //         'background-position': 'center',
        //     };
        // },
    },
    mounted() {
        this.fetchProducts();
    },
}
</script> 