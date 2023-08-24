<template>
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> 𝖓𝖔𝖛𝖎'𝖘 <span class="text-pink-600"> 𝓢𝖍𝖔𝖕 </span></span>
  </a>
  <div class="flex md:order-4">
    <div v-if="isAuthenticated" class="flex md:order-2">
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
    <div class="flex md:order-1 mr-5 mt-2">
              <a href="/profile">
                <svg class="w-[23px] h-[25px] text-gray-800 hover:text-pink-700 transation-1000 hover:scale-110 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
              </a>
              <a href="/cart" class="md:ml-3">
                <svg class="w-[23px] h-[25px] text-gray-800 hover:text-pink-700 transation-1000 hover:scale-110 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                </svg>
              </a>
  </div>
  </div>
 
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page"><router-link to="/"> 𝙃𝙤𝙢𝙚 </router-link></a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link to="/product"> 𝙋𝙧𝙤𝙙𝙪𝙘𝙩 </router-link></a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link to="/brands"> 𝘽𝙧𝙖𝙣𝙙𝙨 </router-link></a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link to="/category"> 𝘾𝙖𝙩𝙚𝙜𝙤𝙧𝙮 </router-link></a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link to="/contact"> 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 </router-link></a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><router-link to="/login"> </router-link></a>
      </li>
    </ul>
  </div>
  </div>
</nav>
<svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 200" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 62, 218.73, 0.17)" offset="0%"></stop><stop stop-color="rgba(255, 11, 205.752, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,60L15,60C30,60,60,60,90,73.3C120,87,150,113,180,120C210,127,240,113,270,100C300,87,330,73,360,76.7C390,80,420,100,450,106.7C480,113,510,107,540,90C570,73,600,47,630,36.7C660,27,690,33,720,56.7C750,80,780,120,810,113.3C840,107,870,53,900,33.3C930,13,960,27,990,36.7C1020,47,1050,53,1080,56.7C1110,60,1140,60,1170,76.7C1200,93,1230,127,1260,120C1290,113,1320,67,1350,66.7C1380,67,1410,113,1440,113.3C1470,113,1500,67,1530,63.3C1560,60,1590,100,1620,116.7C1650,133,1680,127,1710,113.3C1740,100,1770,80,1800,76.7C1830,73,1860,87,1890,86.7C1920,87,1950,73,1980,76.7C2010,80,2040,100,2070,96.7C2100,93,2130,67,2145,53.3L2160,40L2160,200L2145,200C2130,200,2100,200,2070,200C2040,200,2010,200,1980,200C1950,200,1920,200,1890,200C1860,200,1830,200,1800,200C1770,200,1740,200,1710,200C1680,200,1650,200,1620,200C1590,200,1560,200,1530,200C1500,200,1470,200,1440,200C1410,200,1380,200,1350,200C1320,200,1290,200,1260,200C1230,200,1200,200,1170,200C1140,200,1110,200,1080,200C1050,200,1020,200,990,200C960,200,930,200,900,200C870,200,840,200,810,200C780,200,750,200,720,200C690,200,660,200,630,200C600,200,570,200,540,200C510,200,480,200,450,200C420,200,390,200,360,200C330,200,300,200,270,200C240,200,210,200,180,200C150,200,120,200,90,200C60,200,30,200,15,200L0,200Z"></path></svg>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
};
</script>   