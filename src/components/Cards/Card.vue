<template>
    <div class="card mb-4">
        <img :src="card.image_uris.normal" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title"> {{ card.name }} </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><span class="fw-bold">Artiste :</span> {{ card.artist }}</li>
            <li class="list-group-item"><span class="fw-bold">Type :</span> {{ card.type_line }} </li>
            <li class="list-group-item">
                  <span class="fw-bold">Couleur : </span>
                    <span v-for="(color, index) in card.color_identity" :key="index" class="me-3" >
                        <span class="bg-primary px-2 py-1 rounded text-white fw-bold" >{{ color }}</span>
                    </span>
            </li>
          </ul>
          <p class="card-text mt-5">{{ shourtDescription }}...</p>
          <router-link :to="/card/+card.id">Voir la carte</router-link>
        </div>
        <button @click="addToMain(card)" class="btn rounded btn-warning fw-bold"  >+</button>
      </div>
</template>

<script>

    export default{
        props:{
            card: Object
        },

        computed:{
          shourtDescription(){
            return this.card.oracle_text.substr(0,110)
          }
        },

        methods:{
          addToMain(card){
            this.$store.dispatch('add_to_card', card )
            console.log(this.$store.state.jeux)
          }
        }
    }
</script>