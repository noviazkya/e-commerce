<template>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap" rel="stylesheet" />
<div class="flex min-h-screen w-screen">
  <div class="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
    <!-- Left Column -->
    <div class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
      <div class="mb-16 lg:my-auto lg:max-w-lg">
        <div class="mb-6 max-w-xl">
          <div>
            <p class="bg-teal-accent-400 mb-2 inline-block rounded-full bg-pink-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">25% off this perfume</p>
          </div>
          <h2 class="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
            𝘿𝙞𝙨𝙘𝙤𝙫𝙚𝙧 𝙁𝙖𝙣𝙩𝙖𝙨𝙮 <br/>
            𝘼𝙧𝙤𝙢𝙖𝙨
            <span class="rounded- abg-gradient-to-r inline-block bg-pink-400 from-pink-400 to-sky-400 px-2 font-bold text-white"> 𝙋𝙚𝙧𝙛𝙪𝙢𝙚 </span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg"> Feel the sensation of the aroma of the lure. </p>
        </div>
        <div class="flex items-center">
          <a href="/product" class="bg-pink-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-pink-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-pink-300 outline-none transition duration-200 hover:scale-110 hover:bg-pink-500 focus:ring"> 𝙎𝙝𝙤𝙥 𝙉𝙤𝙬 </a>
          <a href="/" class="inline-flex items-center font-semibold text-sky-400 transition-colors duration-200 hover:text-pink-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
            𝘞𝘢𝘵𝘤𝘩 𝘙𝘦𝘷𝘪𝘦𝘸 </a
          >
        </div>
      </div>
    </div>
    <!-- /Left Column -->

    <!-- Right Column -->
    <div class="flex h-full w-full space-x-3 overflow-hidden md:justify-end"> 
      <!-- Col 2 -->
      <div class="hidden w-56 items-center space-y-3 lg:flex">
        <div class="overflow-hidden rounded-xl bg-yellow-400">
          <img class="h-full w-full object-cover" src="https://i.pinimg.com/564x/9f/92/00/9f9200a5aaa9eafc5efb23981b64a9bc.jpg" alt="" />
        </div>
      </div>
      <div class="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
        <div class="h-40 overflow-hidden rounded-xl bg-green-600/60">
          <img class="mx-auto h-full w-full object-cover" src="https://i.pinimg.com/564x/e5/30/c5/e530c59acdb307b90f61581c2aed1419.jpg" alt="" />
        </div>
        <div class="h-40 overflow-hidden rounded-xl bg-pink-600/60">
          <img class="mx-auto h-full w-full object-cover" src="https://i.pinimg.com/564x/c0/1f/81/c01f81e15533a3975ec51566d7c30c64.jpg" alt="" />
        </div>
        <div class="h-40 overflow-hidden rounded-xl bg-blue-600/60">
          <img class="mx-auto h-full w-full object-cover" src="https://i.pinimg.com/564x/67/e4/1f/67e41f70942d14b3c8dfe2c0d62873eb.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- /Right Column -->
  </div> 
</div>
</template>

<style>
  * {
  font-family: 'Source Sans Pro';
  }
</style>