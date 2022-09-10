<script setup>
    import { getApiAccount } from '../../api/search';
    import {useRoute, useRouter} from 'vue-router'
    import set_error from '../../mixins/set_error'
    import { ref } from 'vue';
    
    const route = useRoute()
    const router = useRouter()
    const {region, battleTag:profile} = route.params
    const profileData = ref(null)

    getApiAccount(region, battleTag)
    .then(({data})=>profileData.value = data)
    .catch(err=>{
        profileData.value = null
        const errObj = {
            route_params: route.params,
            message: err.message
        }

        if(err.response){
            errObj.data = err.response.data
            errObj.status = err.response.status
        }

        //save error at vuex state
        set_error(errObj)

        router.push({name:"Error"})

    })
</script>

<template>
    <h1>Profile</h1>
</template>