<template>
    <div class="mb-5">
        <button class="btn btn-primary" @click="filterByName">Par nom</button>
        <button class="btn btn-success" @click="filterByColor" >Par couleur</button>
        <button class="btn btn-danger" @click="filterByType">Par type</button>
    </div>
</template>



<script>

    export default{
        props:{
            cards: Array
        },

       data(){
            return{
                filter: false,
                filterColor: false,
                filterType: false
            }
       },

       methods:{
            filterByName(){
                this.filter = !this.filter
                if(this.filter){
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