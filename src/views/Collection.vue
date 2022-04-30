<template>
  <div class="container">
      <h1 class="mb-5">Collection : {{ param }} </h1>
   <input type="text" v-model="query" class="form-control" placeholder="Recherchez un film"  />
    <SortData :cards="cards" class="mt-5" />
    <div class="row" v-if="cards.length > 0">
        <div class="col-md-3" v-for="card in handleFilter" :key="card.id">
            <Card :card="card" :id="card.id" />
        </div>
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/Cards/Card'
import SortData from '../components/SortData'
import Loading from '@/components/Loading'

    export default{
        name: 'collection-card',
        components:{Card, SortData, Loading},

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
            },
        }
    }
</script>
