<template>
<Navbar></Navbar>
<router-view/>
<router></router>
<Footer></Footer>
</template>
<script setup>
import "flowbite/dist/flowbite";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import router from "./router";
</script>