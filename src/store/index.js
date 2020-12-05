import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    loading:false
  },
  mutations: {
    set_user(state,user){
      state.user=user;
    },
    set_loading(state,flag){
      state.loading = flag;
    }
  },
  actions: {
    getUser({commit}){
      commit('set_loading',true)
      axios.get("https://randomuser.me/api").then((response)=>{
        console.log('loggin response',response.data.results[0])
        let user= response.data.results[0]
        commit('set_user',user)
      }).catch(e =>console.log(e)).finally(()=>{
        commit('set_loading',false)
      })
    }
  },
  getters: {
    user( state ){
      return state.user;
    },
    loading( state ){
      return state.loading;
    }
  },
})
