import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    jeu: {},
  },
  mutations: {
    ADD_TO_CARD(state, payload){
      if(!state.jeu.name){
        if(state.cards.length !== 7){
          state.cards.push(payload)
        }else{
          alert('Désoler votre main est complette')
        }
      }else{
        if(state.jeu.cards.length !== 7){
          state.jeu.cards.push(payload)
        }else{
          alert('Désoler votre main est complette')
        }
      }
    },

    ADD_JEU(state, payload){
        state.jeu  = {
          name: payload.name,
          date: payload.date,
          cards: payload.cards
        }
    },

    DELETE_CARTE(state, payload){
      var t = state.cards.filter((item, i) => i!== payload)
      state.cards = t
    },

    DELETE_CARTE_IN_MAIN(state, payload){
       var t = state.jeu.cards.filter((item,i) => i !== payload)
       state.jeu.cards = t
    },

    DELETE_JEU(state){
      state.jeu = {}
    }

  },

  actions: {
    add_to_card({commit}, card){
        commit('ADD_TO_CARD', card)
    },

    add_jeu({commit}, jeu){
      commit('ADD_JEU', jeu)
    },

    deleteCarte({state,commit}, card){
      if(state.jeu.name){
        commit('DELETE_CARTE_IN_MAIN', card)
        if(state.jeu.cards.length == 0){
          commit('DELETE_JEU')
        }
      }else{
        commit('DELETE_CARTE', card)
      }
    },

    delete_jeu({commit}){
      commit('DELETE_JEU')
    }
  }
})
