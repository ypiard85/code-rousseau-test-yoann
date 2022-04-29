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
              <router-link class="nav-link active" aria-current="page" to="/ajout-d-un-jeu">Jeux unique <small class="badge bg-primary text-wrap">{{ this.$store.state.cards.length }} cartes</small></router-link>
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
  export default{

  }

</script>

<style lang="scss">

</style>
