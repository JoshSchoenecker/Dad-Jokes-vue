<template>
    <div class="SearchForJokes">
        <p> {{title}} </p>
        <SearchJokes/>
    </div>
</template>


<script>
import SearchJokes from "../components/SearchJokes"
export default {
    name: 'SearchForJokes',
    data(){
        return {
            title: "this is the joke search page"
        }
    },
    computed:{},
    methods:{},
    components:{ SearchJokes }
}
</script>


<style scoped>

</style>