<template>
    <div class="d-flex justify-content-center flex-wrap align-items-center">
        <img :src="card.image_uris.normal" width="300" class="mb-3 me-3" alt="">
        <div class="card col-md-4 col-10 bg-light" stylee="max-width: 100%">
            <div class="card-body">
                <h1 class="fs-3"> {{ card.name }} </h1>
                <p class="fs-4"> {{ card.type_line }} </p>
                <p> <span class="fw-bold">Artiste :</span> {{ card.artist }} </p>
                <p class="fw-bold">
                    Couleur :
                    <span v-for="(color, index) in card.color_identity" :key="index" class="me-3 mb-3 bg-primary px-2 py-1 rounded text-white fw-bold" >
                        {{ color }}
                    </span>
                </p>
                <p> {{ card.oracle_text }} </p>
                <button class="btn btn-warning" @click="$store.dispatch('add_to_card', card)">+</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            card: Object
        },
    }
</script>