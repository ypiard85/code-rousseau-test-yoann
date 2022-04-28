<template>
    <div class="card mb-4">
        <img :src="card.image_uris.normal" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title"> {{ card.name }} </h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Artiste : {{ card.artist }}</li>
            <li class="list-group-item">Type : {{ card.type_line }} </li>
            <li class="list-group-item">
                    Couleur :
                    <span v-for="(color, index) in card.color_identity" :key="index" class="me-3" >
                        <span class="bg-primary px-2 py-1 rounded text-white fw-bold" >{{ color }}</span>
                    </span>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>

    export default{
        props:{
            card: Object
        }
    }
</script>