import {createStore} from 'vuex'
import oauth from './modules/oauth'
import loading from './modules/loading'


const store = createStore({
    modules:{
        oauth,
        loading
    }
    ,
    actions:{
        hola(){
            console.log("Hola from store")
        }
    }
})

export default store