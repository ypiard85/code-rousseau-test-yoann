import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jeux: [],
  },
  mutations: {
    ADD_TO_CARD(state, payload){
      state.jeux.push(payload)
    }
  },

  actions: {
    add_to_card({state,commit}, card){
      if(state.jeux.length !== 1){
        commit('ADD_TO_CARD', card)
      }else{
        alert('Désoler votre main est complet')
      }
    }
  },
})
