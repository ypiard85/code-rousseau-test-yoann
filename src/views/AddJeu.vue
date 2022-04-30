<template>
    <div class="container">
        <div class="row" v-if="!this.jeu.name">
            <div class="col-md-6 mb-5">
                <h2>Ajouter un jeu</h2>
                <form action="" @submit.prevent="handleSubmit" class="mt-5">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" v-model="name" placeholder="Nom du jeu">
                        <label for="name">Nom de jeu</label>
                      </div>
                      <button type="submit" class="btn btn-primary" v-if="loading" disabled >Je crée mon jeu</button>
                    <button type="submit" class="btn btn-primary" v-else  >Je crée mon jeu</button>
                </form>
            </div>
            <div class="col-md-6">
                <h2>Liste des cartes</h2>
                <div class="row">
                    <div class="col-6 col-md-4 mt-5" v-for="(card, index) in this.cards" :key="card.id">
                        <img :src="card.image_uris.normal" style="max-width: 100%" class="mb-3" alt="">
                        <button  v-if="loading" disabled  class="btn btn-danger">X</button>
                        <button  v-else @click="deleteImage(index)" class="btn btn-danger">X</button>
                    </div>
                </div>
            </div>
            </div>
            <div class="accordion mt-5" id="accordionExample" v-else>
                <ListJeux :jeu="jeu" />
            </div>
            <Loading v-if="loading" />
    </div>
</template>


<script>
import ListJeux from '@/components/Cards/ListJeux';
import Loading from '@/components/Loading'
import { mapState } from 'vuex'

    export default{
        components:{ListJeux, Loading},
        data(){
            return{
                name: "",
                loading: false
            }
        },

        computed:{
            ...mapState(['cards', 'jeu']),

            hasDisabled(){
                var statut = ''
               if(this.loading){
                  statut = 'disabled'
               }else{
                   statut = ''
               }
               return statut
            }
        },

        methods:{
            handleSubmit(){
                if(this.name != ""){
                    if(this.cards.length > 0){
                        if(this.cards.length <= 7){
                            this.loading = true
                            setTimeout(() => {
                                this.$store.dispatch('add_jeu', {
                                    name: this.name,
                                    date: new Date(),
                                    cards: this.cards
                                })
                                this.$store.state.cards = [],
                                this.cards = []
                                this.name = ''
                                this.loading = false
                            }, 3000)

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