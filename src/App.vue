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
          </ul>
        </div>
      </div>
    </nav>
    <div class="pt-5">
      <router-view/>
    </div>
    <button type="button" class="btn btn-primary fixed-bottom" style="width: 50px" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {{  this.$store.state.jeux.length }}
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Cartes en main</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            LISTE DES CARTES
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changs</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{

    data(){
      return{

      }
    },

  }

</script>

<style lang="scss">

</style>
