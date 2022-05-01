<template>
    <div class="container">
      <input type="text" v-model="query" class="form-control mb-5" placeholder="Recherchez une collection"  />
        <table class="table">
            <thead>
          <tr>
            <th scope="col">Icon</th>
            <th scope="col">Nom</th>
            <th scope="col">Date de sortie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="collection in handleFilter" :key="collection.id">
              <th scope="row"><img width="25" :src="collection.icon_svg_uri" alt=""></th>
              <td><span class="fw-bold">{{ collection.name }}</span><span class="text-secondary ms-2">{{ collection.code }}</span> </td>
              <td> {{ collection.released_at }} </td>
              <td><router-link :to="'/collection/' + collection.code " class="btn btn-sm btn-primary"> Voir plus</router-link></td>
            </tr>
        </tbody>
      </table>
      <Loading v-if="collections.length < 1" class="mt-5" />
</div>
</template>

<script>
  import Loading from '../../components/Loading'

  export default{

    name: 'collection-list',
    components:{Loading},

    props:{
      collections : Array
    },

    data(){
      return{
        query: ""
      }
    },

    computed:{
            handleFilter(){
               return this.collections.filter(c => c.name.toLowerCase().includes(this.query.toLowerCase()))
            },
        }

  }
</script>