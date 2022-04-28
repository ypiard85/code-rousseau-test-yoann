<template>
  <div class="container mt-5">
    <div class="row">
        <div class="col-md-3" v-for="card in cards" :key="card.id">
            <Card :card="card" />
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/Collection/Card'

    export default{
        name: 'collection-card',
        components:{Card},

        data(){
            return{
                cards: [],
                param: this.$route.params.code
            }
        },

        created(){
            axios(`https://api.scryfall.com/cards/search?order=set&q=e%3A${this.param}&unique=prints`).then(res => {
                this.cards.push(...res.data.data)
            }).catch(e => console.error(e))
            console.log(this.cards)
        },

        mounted(){
        }

    }
</script>
