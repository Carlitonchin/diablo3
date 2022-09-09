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
            oauth.get_token()
            .then(({data}) =>{
                commit("SET_ACCESS_TOKEN", data.access_token)
            })
            .catch(err=>{
                console.error("Error oauth ", err)
            })
            .finally(()=>console.log("oauth done"))
        }
    }
})
