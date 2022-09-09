<script > 
import { mapActions } from 'vuex';

export default {
  name:"App",
  computed:{
    ...mapActions('oauth', ['getToken'])
  },

  methods:{
    init(){
      this.getToken
    }
  },

  created(){
    this.init()
  }
}
</script>

<template>
  <h1>Hola</h1>
</template>