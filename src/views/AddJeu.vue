<template>
    <div class="mt-5 container">
        <div class="row">
            <div class="col-md-6">
                <h2>Ajouter un jeu</h2>
                <form action="" @submit.prevent="handleSubmit" class="mt-5">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" v-model="name" placeholder="Nom du jeu">
                        <label for="name">Nom de jeu</label>
                      </div>
                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" v-model="date" id="floatingInput" placeholder="Nom du jeu">
                        <label for="date">Date</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Je crée mon jeu</button>
                </form>
            </div>
            <div class="col-md-6">
                <h2>Liste des cartes</h2>
                <div class="row">
                    <div class="col-6 col-md-4 mt-5" v-for="card in this.cards" :key="card.id">
                        <img :src="card.image_uris.normal" style="max-width: 100%" alt="">
                        <button @click="deleteImage(card.id)" class="btn btn-danger">X</button>
                    </div>
                </div>
            </div>
            <div class="alert alert-success d-flex align-items-center mt-5" role="alert" v-if="message != '' ">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>
                 {{ message }}
                </div>
              </div>
        </div>
    </div>
</template>


<script>
    import { mapState } from 'vuex'

    export default{

        data(){
            return{
                name: "",
                date: "",
                message: "",
            }
        },

        computed: mapState(['cards']),

        methods:{
            handleSubmit(){
                if(this.name != "" && this.date != ""){
                    if(this.cards.length > 0){
                        if(this.cards.length <= 7){
                            setTimeout(() => {
                                this.$store.dispatch('add_jeu', {
                                    name: this.name,
                                    date: this.date,
                                    cards: this.cards
                                })
                                this.$store.state.cards = [],
                                this.cards = []
                                this.name = ''
                                this.date = ""
                                this.message = "Votre jeu a été créer"
                            }, 2000)

                        }else{
                            alert('Votre jeu ne dois pas contenir plus de 7 cartes')
                        }
                    }else{
                        alert('Veuillez ajouter au moin une carte')
                    }
                }else{
                    alert('Merci de bien vouloir remplir tous les champs')
                }
            },

            deleteImage(card){
              this.$store.dispatch('deleteCarte', card)
            }
        }
    }
</script>