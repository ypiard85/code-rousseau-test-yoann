<template>
    <p>Collection - {{ param }} </p>
</template>

<script>

    export default{
        data(){
            return{
                param: this.$route.params.code
            }
        }
    }

</script>