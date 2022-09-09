<script setup>
import { regions } from '../../utils/regions';
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const region = ref("eu")
const battleTag = ref("")

const get_regions = computed(() => {
    return regions.map(r => {
        return {
            value: r,
            text: r.toUpperCase()
        }
    })
})

const onSubmit = ()=>{
    router.push({
        name:"Profile",
        params:{
            region:region.value,
            battleTag:battleTag.value.replace("#","-")
        }
    })
}

onMounted(()=>console.log(get_regions.value))

</script>

<template>
    <div class="search-form my-5">

        <div class="row">
            <div class="col-12 col-md-8 offset-md-2">
                <!-- Formulario -->
                <b-form @submit.prevent="onSubmit">

                    <!-- Grupo 1 (Input texto) -->
                    <b-form-group id="input-group-1" label="BattleTag:" label-for="input-text"
                        description="Format: YourProfile#1234">
                        <b-form-input id="input-text" v-model="battleTag" type="text" size="lg" required
                            placeholder="BattleTag" />
                    </b-form-group>

                    <!-- Grupo 2 (Selector de región) -->
                    <b-form-group id="input-group-3" label="Region:" label-for="input-region">
                        <b-form-select id="input-region" v-model="region" size="lg" :options="get_regions" required />
                    </b-form-group>

                    <!-- Botón envío -->
                    <div class="d-flex justify-content-end mt-5">
                        <b-button type="submit" variant="primary" size="lg">Submit</b-button>
                    </div>

                </b-form>
            </div>
        </div>

    </div>
</template>