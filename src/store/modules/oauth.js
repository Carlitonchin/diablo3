import * as oauth from '../../api/oauth'
export default (
    {
        namespaced: true,
    state:{
        accessToken:null
    },
    mutations:{
        SET_ACCESS_TOKEN (state, payload){
            state.accessToken = payload
        }
    },
    actions:{
        
        getToken({commit}){
            commit("loading/SET_LOADING", true, {root:true})
            oauth.get_token()
            .then(({data}) =>{
                commit("SET_ACCESS_TOKEN", data.access_token)
            })
            .catch(err=>{
                console.error("Error oauth ", err)
            })
            .finally(()=>commit("loading/SET_LOADING", false, {root:true}))
        }
    }
})
