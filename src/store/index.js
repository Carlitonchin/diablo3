import {createStore} from 'vuex'
import oauth from './modules/oauth'


const store = createStore({
    modules:{
        oauth
    }
    ,
    actions:{
        hola(){
            console.log("Hola from store")
        }
    }
})

export default store