<template>
  <div class="container mt-5">
      <h1 class="mb-5">Collection : {{ param }} </h1>
   <input type="text" v-model="query" class="form-control" placeholder="Recherchez un film"  />
    <SortData :cards="cards" class="mt-5" />
    <div class="row">
        <div class="col-md-3" v-for="card in handleFilter" :key="card.id">
            <Card :card="card" />
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/Cards/Card'
import SortData from '../components/SortData'

    export default{
        name: 'collection-card',
        components:{Card, SortData},

        data(){
            return{
                cards: [],
                param: this.$route.params.code,
                query: "",
            }
        },

        created(){
            axios(`https://api.scryfall.com/cards/search?order=set&q=e%3A${this.param}&unique=prints`).then(res => {
                    this.cards.push(...res.data.data)
                }).catch(e => console.error(e))
                console.log(this.cards)
        },

        computed:{
            handleFilter(){
               return this.cards.filter(c => c.name.toLowerCase().includes(this.query.toLowerCase()))
            }

        }

    }
</script>
