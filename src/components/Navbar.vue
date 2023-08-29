<template>
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> 𝖓𝖔𝖛𝖎'𝖘 <span class="text-pink-600"> 𝕱𝖆𝖘𝖍𝖎𝖔𝖓 </span></span>
  </a>
  <div class="flex md:order-4">
    <div v-if="isAuthenticated" class="flex md:order-2">
                 <CartBadgeComponent/> 
                <button @click="logout" type="button"
                    class="text-white bg-pink-700 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                    𝙇𝙤𝙜𝙤𝙪𝙩
                </button>
            </div>
            <div v-else class="flex md:order-4">
                <router-link to="/login" type="button"
                    class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                    𝙇𝙤𝙜𝙞𝙣
                </router-link>
            </div>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg> 
    </button>
    <div class="flex md:order-1 mr-3 mt-1">
              <a href="/profile">
                <svg class="w-[18px] h-[25px] text-gray-800 hover:text-pink-700 transation-1000 hover:scale-110 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
              </a>
              <!-- <a href="/cart" class="md:ml-3">
                <svg class="w-[23px] h-[25px] text-gray-800 hover:text-pink-700 transation-1000 hover:scale-110 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg>
              </a> -->
  </div>
  </div>
 
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-pink-500" aria-current="page"><router-link to="/"> 𝙃𝙤𝙢𝙚 </router-link></a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link to="/product"> 𝙋𝙧𝙤𝙙𝙪𝙘𝙩 </router-link></a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link to="/brands"> 𝘽𝙧𝙖𝙣𝙙𝙨 </router-link></a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link to="/category"> 𝘾𝙖𝙩𝙚𝙜𝙤𝙧𝙮 </router-link></a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link to="/contact"> 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 </router-link></a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link to="/login"> </router-link></a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CartBadgeComponent from './CartBadgeComponent.vue';

export default {
  computed: {
        ...mapGetters('auth', ['isAuthenticated']),
    },
    methods: {
        ...mapActions('auth', ['logout']),
    },
    components: { CartBadgeComponent }
};
</script> 