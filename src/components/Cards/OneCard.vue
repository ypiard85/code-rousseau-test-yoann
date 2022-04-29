<template>
    <div class="d-flex justify-content-center flex-wrap align-items-center mt-5">
        <img :src="card.image_uris.normal" width="300" class="mb-3 me-3" alt="">
        <div class="card col-md-4 col-10 bg-info" stylee="max-width: 100%">
            <div class="card-body">
                <h1 class="fs-3"> {{ card.name }} </h1>
                <p class="fs-4"> {{ card.type_line }} </p>
                <p> <span class="fw-bold">Artiste :</span> {{ card.artist }} </p>
                <p> {{ card.oracle_text }} </p>
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