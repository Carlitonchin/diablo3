<script setup>
    const {variant, type} = defineProps({
        //prop
        variant:{
            type:String,
            default:"info",
            validator: value=>{
                return [
                    'primary',
                    'secondary',
                    'danger',
                    'warning',
                    'success',
                    'info',
                    'light',
                    'dark'
                    ].includes(value)
            }
        },
        //prop
        type:{
            type:String,
            default:"border",
            validator: value=>{
                return ['border', 'grow'].includes(value)
            }
        }
    })
</script>

<template>
    <!--Clases CSS de Bootstrap-->
    <div class="loading-wrapper text-center py-5">
      <div class="spinner-wrapper w-100">
        <!--Componente Spinner de Bootstrap 🔄-->
        <b-spinner class="spinner" label="Loading..." :type="type" :variant="variant"/>
      </div>
      <h1 class="my-5">Loading...</h1>
    </div>
  </template>

<style lang="stylus" scoped>
    .spinner-wrapper
      .spinner
        width 4rem
        height 4rem
  </style>