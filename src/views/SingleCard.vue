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

        //Affichage de l'uri de l'api pour afficher le détail d'une carte
        created(){
            axios(`https://api.scryfall.com/cards/${this.id}`).then(res => {
                this.card = res.data
            }).catch(e => console.log(e))
        },

    }

</script>