<template>
    <div class="container">
        <table class="table">
            <thead>
          <tr>
            <th scope="col">Icon</th>
            <th scope="col">Nom</th>
            <th scope="col">Date de sortie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="collections.length > 0">
            <tr v-for="collection in this.collections" :key="collection.id">
              <th scope="row"><img width="25" :src="collection.icon_svg_uri" alt=""></th>
              <td><span class="fw-bold">{{ collection.name }}</span><span class="text-secondary ms-2">{{ collection.code }}</span> </td>
              <td> {{ collection.released_at }} </td>
              <td><router-link :to="'/collection/' + collection.code " class="btn btn-sm btn-primary"> Voir la col</router-link></td>
            </tr>
        </tbody>
      <Loading v-else />
</table>
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

  }
</script>