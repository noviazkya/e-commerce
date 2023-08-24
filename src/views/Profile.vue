<template>
    <!-- component -->
<div class="flex items-center h-screen w-full justify-center">
<div class="max-w-xs">
    <div class="mt-20 text-center">
      <span class="font-bold text-4xl"> 𝙋𝙧𝙤𝙛𝙞𝙡𝙚 𝙋𝙖𝙜𝙚 </span>
      <br>
      <br>
      <p class="mb-4"></p>
    </div>
    <div class="bg-white shadow-xl rounded-lg py-4">
        <div class="photo-wrapper p-4">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://i.pinimg.com/564x/5e/d6/39/5ed63905c998c5c3cd29f2ab3890ee2e.jpg" alt="">
        </div>
        <div class="p-3">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8"> {{ user.name }} </h3>
            <div class="text-center text-gray-500 text-xs font-semibold">
                <p> {{ user.email }} </p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-600 font-semibold"> 𝘉𝘢𝘭𝘢𝘯𝘤𝘦 </td>
                    <td class="px-2 py-2">$ {{ user.balance }} </td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-600 font-semibold"> 𝘗𝘩𝘰𝘯𝘦 </td>
                    <td class="px-2 py-2"> {{ user.phone }} </td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-600 font-semibold"> 𝘌𝘮𝘢𝘪𝘭 </td>
                    <td class="px-2 py-2"> {{ user.email }} </td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a class="text-xs text-pink-700 italic hover:underline hover:text-pink -700 font-medium" href="#"> 𝙎𝙚𝙣𝙙 𝙢𝙚𝙨𝙨𝙖𝙜𝙚</a>
            </div>

        </div>
    </div>
</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters("auth", ["getUser"]),
        user() {
            return this.getUser;
        },
    },
    methods: {
        ...mapActions("auth", ["getUserInfo"]),
    },
    async mounted() {
        // fetch user information
        const user = await this.getUserInfo();

        // if user information
        if (user) {
            this.$store.commit("auth/SET_USER", user);
        }
    },
};
</script> 