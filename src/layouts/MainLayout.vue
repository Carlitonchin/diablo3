<script setup>
import HeaderBar from '../components/HeaderBar.vue'
import FooterBar from '../components/Footer/Footer.vue';

</script>

<template>
    <div class="container">
      <HeaderBar/>
      <router-view/>
      <FooterBar/>
    </div>
  </template>  