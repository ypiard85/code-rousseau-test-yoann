<template>
    <div>

        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {{ jeu.name }} | Créer le : {{ getRealDate }}
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                    <div class="col-6 col-md-3 mb-5" v-for="(card, index) in jeu.cards" :key="index">
                        <img class="mb-3" style="max-width: 100%" :src="card.image_uris.normal"  alt="">
                        <button @click="deleteImage(index)" class="btn btn-danger">X</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="btn btn-danger mt-3" @click="$store.dispatch('delete_jeu')">Supprimer le jeu actuel</button>
</div>
</template>

<script>
    export default{
        props:{
            jeu: Object,
        },

        data(){
            return{
                month: ['Janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'novembre', 'décembre']
            }
        },

        computed:{
            getRealDate(){
                var d = this.jeu.date
                return  d.getDate() + ' ' + this.month[d.getMonth()] + ' ' + d.getFullYear();
            }
        },

        methods:{
            deleteImage(card){
                this.$store.dispatch('deleteCarte', card)
            }
        }
    }
</script>