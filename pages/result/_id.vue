<template>
  <div class="container">
    <div class="section">
      <div class="columns is-mobile is-centered">
        <div class="column is-10">
          <div v-if="this.$route.params.id == 'leak'">
            <h1 class="title has-text-centered">
              <strong>頑張って耐えるのです！</strong>
            </h1>
            <h2 class="subtitle has-text-centered">
              あなたを含めて今耐えてる人は{{ resultLeak }}人！
            </h2>
          </div>
          <div v-else>
            <h1 class="title has-text-centered">
              <strong>漏らしてないなら勝利！</strong>
            </h1>
            <h2 class="subtitle has-text-centered">
              あなたを含めて漏らすことのなかった人は{{ resultClean }}人！
            </h2>
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
import { db } from '@/plugins/firebase';

export default {
  data() {
    return {
      resultLeak: 0,
      resultClean: 0
    };
  },
  mounted() {
    db.collection("unko").onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.resultLeak = doc.data().leak;
        this.resultClean = doc.data().clean;
      });
    });
  }
};
</script>

<style scoped>
</style>