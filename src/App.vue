<script setup>
import LoadLayout from './layouts/LoadLayout.vue';
import BaseLoading from './components/BaseLoading.vue';
import MainLayout from './layouts/MainLayout.vue';

import { computed } from 'vue';
import {mapActions, mapState, useStore} from 'vuex'

const store = {
  $store:useStore()
}

const action = mapActions("oauth", ['getToken'])
const loading = mapState('loading', ['isLoading'])

const isLoading = computed(()=>loading.isLoading.call(store))

function getToken(){
  action.getToken.call(store)
}

getToken()

</script>

<template>
<div id="app">
  <LoadLayout v-if="isLoading">
    <BaseLoading/>
  </LoadLayout>

  <MainLayout v-else/>
</div>
</template>

<style lang="stylus">
  #app
    padding 60px 0
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #ffffff // Le ponemos un color de letra blanco para que resalte
    background-color #15202b // Le cambiamos el color de fondo por un azul marino oscuro
</style>