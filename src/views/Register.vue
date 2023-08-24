<template>
    <div class="flex h-screen w-screen items-center overflow-hidden px-2">
  <!-- Login -->
  <div class="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
    <div class="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-pink-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
    <div class="mx-auto mb-2 space-y-3">
      <h1 class="text-center text-3xl font-bold text-gray-700">𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙩𝙞𝙤𝙣</h1>
      <p class="text-gray-500">Sign in to access your account</p>
    </div>
    <form id="" class="mb-4" @submit.prevent="performRegister">
        <div>
      <div class="relative mt-2 w-full">
        <input type="text"   class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" v-model="name" placeholder="Name" required/>
        <label for="email" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Name </label>
      </div>
    </div>

    <div>
      <div class="relative mt-2 w-full">
        <input type="text"   class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"  v-model="email" placeholder="Email" required/>
        <label for="email" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Email </label>
      </div>
    </div>

    <div>
      <div class="relative mt-2 w-full">
        <input type="text" v-model="password" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="Password" required/>
        <label for="password" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Password </label>
      </div>
    </div>

    <div>
      <div class="relative mt-2 w-full">
        <input type="text"   class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" v-model="confirm_password" placeholder="Confirm password" required/>
        <label for="email" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Confirm Password </label>
      </div>
    </div>

    <div>
      <div class="relative mt-2 w-full">
        <input type="text"   class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" v-model="phone" placeholder="Phone" required/>
        <label for="email" class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Phone </label>
      </div>
    </div>

    <div class="flex w-full items-center">
      <button type="submit" class="shrink-0 inline-block w-36 rounded-lg bg-pink-600 py-3 font-bold text-white mt-2">𝘎𝘦𝘵 𝘴𝘵𝘢𝘳𝘵𝘦𝘥</button>
      <a class="w-full text-center text-sm font-medium text-gray-600 hover:underline" href="#"></a>
    </div>
    
    <p class="text-center text-gray-600">
      <a href="#" class="whitespace-nowrap font-semibold text-gray-900 hover:underline"></a>
    </p>
    </form>
  </div>
  <!-- /Login -->
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            phone: '',
        };
    },
    methods: {
        ...mapActions('auth', ['register']),
        async performRegister() {
            const credentials = {
                name:  this.name,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password,
                phone: this.phone,
            };

            const success = await this.register(credentials);

            if (success) {
                // redirect to the desired route on successful register
                this.$router.push('/login');
            } else {
                alert("𝙍𝙚𝙜𝙞𝙨𝙩𝙚𝙧 𝙁𝙖𝙞𝙡𝙚𝙙");
            }
        },
    },
};
</script> 