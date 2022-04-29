<template>
  <div class="mt-5">
    <CollectionList :collections="collections" />
  </div>
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
