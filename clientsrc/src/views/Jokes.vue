<template>
  <div class="jokes">
    <h1 class="text-center font-italic font-weight-bolder">THIS IS THE JOKES PAGES</h1>
    <div class="row bg-dark mx-3 rounded shadow">
      <searchForJokes class="col-6">
        <button class="btn btn-info">Search Jokes</button>
      </searchForJokes>
    </div>
    <div class="card m-5 border-dark shadow">
      <div class="card-body">
        <CreateJoke v-if="$auth.isAuthenticated" />
        <small class="text-danger" v-else>You must log in to create a joke.</small>
      </div>
    </div>
    <hr>
    <Joke v-for="joke in jokes" :nana="joke" :key="joke._id"/>
  </div>
</template>


<script>
import Joke from "../components/Joke.vue"
import CreateJoke from "../components/CreateJoke";
export default {
  name: "Jokes",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$auth);
    this.$store.dispatch("getJokes");
  },
  computed: {
    jokes(){
     return this.$store.state.jokes
    }
  },
  methods: {},
  components: { CreateJoke, Joke }
};
</script>


<style scoped>
</style>