<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light shadow position-fixed top-0 w-100" style="z-index: 1000">
      <div class="container">
        <div class="d-flex me-3">
          <i class="bi bi-brightness-low"></i>
          <div class="form-check form-switch">
            <input class="form-check-input" v-model="isCheck" @click="handleTheme" type="checkbox" role="switch" id="flexSwitchCheckChecked">
          </div>
          <i class="bi bi-moon-stars-fill"></i>
        </div>
        <router-link class="navbar-brand" to="/">MAGIC</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/ajout-d-un-jeu">Jeux unique
                <small class="badge bg-success text-wrap" v-if="this.jeu.name" > 1 jeu de {{ this.jeu.cards.length }} carte<span v-if="this.jeu.cards.length > 1">s</span> </small>
                <small class="badge bg-primary text-wrap" v-else >{{ this.cards.length }} cartes</small>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div style="padding: 100px 0;">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{

    data(){
      return{
        theme: "light",
        isCheck: false
      }
    },

    //initialise le thème du site dès l'ouverture du site
    mounted(){
      !localStorage.getItem('theme') && localStorage.setItem('theme', 'light')
      document.querySelector('html').classList = localStorage.getItem('theme')

      if(localStorage.getItem('theme') === 'light'){
        this.isCheck = false
      }else{
        this.isCheck = true
      }
    },

    computed: {
      ...mapState(['cards','jeu']),
    },

    //Gérer le thème du site | Dark ou Light
    methods:{
      handleTheme(){
        this.isCheck = !this.isCheck
        this.isCheck ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
        document.querySelector('html').classList = localStorage.getItem('theme')
      }
    }
  }

</script>

<style lang="scss">

</style>
