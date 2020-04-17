<template>
  <div class="create-joke text-center">
    <div class="form-group">
      <label for>Setup</label>
      <input
        type="text"
        class="form-control"
        placeholder="Open your joke up here..."
        v-model="newJoke.setup"
      />
    </div>
    <hr>
    <div class="form-group">
      <label for>Punchline</label>
      <input
        type="text"
        class="form-control"
        placeholder="Now get to the funny part.."
        v-model="newJoke.punchline"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="addJoke()">Add Joke</button>
  </div>
</template>


<script>
export default {
  name: "create-joke",
  data() {
    return {
      newJoke: {}
    };
  },
  mounted() {},
  computed: {},
  methods: {
    addJoke() {
      this.$store.dispatch("addJoke", this.newJoke);
      this.newJoke = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>