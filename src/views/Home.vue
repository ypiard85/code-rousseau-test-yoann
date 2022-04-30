<template>
    <CollectionList :collections="collections" />
</template>

<script>
  import axios from 'axios';
  import CollectionList from '../components/Home/CollectionList'
export default {

  name: 'Home',
  components:{
    CollectionList
  },
  data(){
    return{
      collections : [],
    }
  },

  //Récupère tous les collections de cartes
  created(){
     axios('https://api.scryfall.com/sets/').then(res => {
        res.data.data.forEach(datas => {
          if(datas.card_count > 0){
            this.collections.push(datas)
          }
        });
      }).catch(e => console.error(e))
  },

}
</script>
