<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0 w-100" style="z-index: 1000">
      <div class="container">
        <a class="navbar-brand" href="#">MAGIC</a>
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
    <div class="pt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default{

    computed: mapState(['cards','jeu'])

  }

</script>

<style lang="scss">

</style>
