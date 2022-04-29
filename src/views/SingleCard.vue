<template>
    <OneCard :card="card" />
</template>

<script>
import axios from 'axios'
import OneCard from '@/components/Cards/OneCard'

    export default{
        name: 'single-card',
        components:{OneCard},
        data(){
            return{
                id: this.$route.params.id,
                card: {}
            }
        },

        created(){
            axios(`https://api.scryfall.com/cards/${this.id}`).then(res => {
                this.card = res.data
            })
        },

    }

</script>