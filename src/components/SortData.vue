<template>
    <div class="mb-5 d-flex justify-content-center">
        <button class="btn btn-primary" @click="filterByName">
            Par nom
           <span class="ms-2 fw-bold" v-if="!filterName">A-Z</span>
           <span class="ms-2 fw-bold" v-else>Z-A</span>
        </button>
        <button class="btn btn-success" @click="filterByColor" >
            Par couleur
            <i class="bi bi-caret-down-fill ms-2" v-if="filterColor"></i>
            <i class="bi bi-caret-up-fill ms-2" v-else></i>
        </button>
        <button class="btn btn-danger" @click="filterByType">
            Par type
            <i class="bi bi-caret-down-fill ms-2" v-if="filterType"></i>
            <i class="bi bi-caret-up-fill ms-2" v-else></i>
        </button>
    </div>
</template>



<script>
    export default{
        props:{
            cards: Array
        },

       data(){
            return{
                filterName: false,
                filterColor: false,
                filterType: false
            }
       },

       methods:{
            filterByName(){
                this.filterName = !this.filterName
                if(this.filterName){
                    this.cards.sort( function(a, b){
                    if(a.name > b.name ){
                            return - 1
                        }
                    })
                }else{
                    this.cards.sort( function(a, b){
                    if(a.name < b.name){
                            return - 1
                        }
                    })
                }
            },

            filterByColor(){
                this.filterColor = !this.filterColor
                if(this.filterColor){
                    this.cards.sort( function(a, b){
                    if(a.color_identity > b.color_identity ){
                            return - 1
                        }
                    })
                }else{
                    this.cards.sort( function(a, b){
                    if(a.color_identity < b.color_identity){
                            return - 1
                        }
                    })
                }
            },

            filterByType(){
                this.filterType = !this.filterType
                if(this.filterType){
                    this.cards.sort( function(a, b){
                    if(a.type_line > b.type_line ){
                            return - 1
                        }
                    })
                }else{
                    this.cards.sort( function(a, b){
                    if(a.type_line < b.type_line){
                            return - 1
                        }
                    })
                }
            },

       }

    }
</script>

<style scoped>
    button:not(:last-child){
        margin-right: 20px!important;
    }
</style>