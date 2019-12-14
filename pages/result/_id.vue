<template>
  <div class="container">
    <div class="section">
      <div class="columns is-mobile is-centered">
        <div class="column is-10">
          <div v-if="this.$route.params.id == 'leak'">
            <h1 class="subtitle has-text-centered">
              <strong>頑張って耐えるのです！</strong>
            </h1>
          </div>
          <div v-else>
            <h1 class="subtitle has-text-centered">
              <strong>漏らしてないなら勝利！</strong>
            </h1>
          </div>
          <div class="has-text-centered">
            <img src="~/assets/image/unchi_character.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$router.params.result);
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
</style>