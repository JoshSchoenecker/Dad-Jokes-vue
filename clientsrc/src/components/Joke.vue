<template>
    <div class="container-fluid joke">
        <div class="card col-3 m-4 jokeBorder">
            <div class="card-body">
            <p class="font-size-thicc">
            <span class="font-size-thic">Setup: 
            </span> 
            {{nana.setup}}
            </p>
        <hr>
        <p class="font-size-thicc">
        <span class="font-size-thic">Punchline: 
        </span> 
        {{nana.punchline}}
        </p>
        <p>-{{nana.creator.name}}</p>
        </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Joke',
    props: ["nana"],
    data(){
        return {}
    },
    computed:{
        
    },
    methods:{
    getJokes() {
      this.$store.commit("jokes", {})
    }
    },
    components:{}
}
</script>


<style scoped>
.font-size-thic{
font-size: 2rem;
font-weight: bolder;
}
.font-size-thicc{
    font-size: 1.5rem;
}
.jokeBorder{
    border: 1px solid black;
    box-shadow: 2px 2px 5px 5px black;
}
</style>