import { mapMutations, useStore } from "vuex";

const store = {
    $store:useStore()
}

const mutations = mapMutations('error', ['SET_ERROR'])

export default (params)=>{
    mutations.SET_ERROR.call(store, params)
}