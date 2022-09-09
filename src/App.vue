<script setup>
import {mapActions, useStore} from 'vuex'

const action = mapActions("oauth", ['getToken'])
const store = {
  $store:useStore()
}

function init(){
  action.getToken.call(store)
}

init()

</script>

<template>
  <h1>Hola</h1>
</template>