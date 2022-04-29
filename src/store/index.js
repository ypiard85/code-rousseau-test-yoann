import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    jeux:[],
  },
  mutations: {
    ADD_TO_CARD(state, payload){
      state.cards.push(payload)
    },

    ADD_JEU(state, payload){
      state.jeux.push({
        name: payload.name,
        date: payload.date,
        cards: payload.cards
      })
    },

    DELETE_CARTE(state, payload){
       var t = state.cards.filter(item => item.id !== payload)
       state.cards = t
    }
  },

  actions: {
    add_to_card({state,commit}, card){
      if(state.cards.length !== 7){
        commit('ADD_TO_CARD', card)
      }else{
        alert('Désoler votre main est complet')
      }
    },

    add_jeu({commit}, jeu){
      commit('ADD_JEU', jeu)
    },

    deleteCarte({commit}, card){
      commit('DELETE_CARTE', card)
    }
  },
})
