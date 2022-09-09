<script setup>
import Index from './views/Index.vue'
import { onBeforeMount } from 'vue'

function init(){
  console.log("Hello")
}

onBeforeMount(()=>init())
</script>

<template>
<Index/>
   
</template>