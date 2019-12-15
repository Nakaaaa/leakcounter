<template>
  <div class="container">
    <div class="section">
      <div class="columns is-mobile is-centered">
        <div class="column is-10">
          <h1 class="title has-text-centered">漏れそうカウンター</h1>
          <div class="content has-text-centered">
            <img src="../assets/image/virus_benpi.png" />
          </div>
          <div class="content has-text-centered">
            漏れそうなら
            <br />あなたも
            <br />ボタンを押そう！
            <br />この気持ちを共有！
          </div>
          <div class="content has-text-centered">
            現在
            <strong class="contentsize">{{ leak }}</strong>人漏れそうです！
            <p>
              <nuxt-link to="/result/leak">
                <button class="button is-info" @click="addCount('leak')">漏れそう？</button>
              </nuxt-link>
            </p>
          </div>
          <div class="backstar">
            <div class="content has-text-centered">
              すっきりしたなら
              <br />あなたも
              <br />ボタンを押そう！
              <br />この気持ちを共有！
              <br />
            </div>
            <div class="content has-text-centered">
              現在
              <strong class="contentsize">{{ clean }}</strong>人スッキリ！
              <p>
                <nuxt-link to="/result/clean">
                  <button class="button is-info" @click="addCount('clean')">スッキリした？</button>
                </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";

export default {
  components: {},
  data() {
    return {
      leak: 0,
      clean: 0
    };
  },
  mounted() {
    db.collection("unko").onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.leak = doc.data().leak;
        this.clean = doc.data().clean;
      });
    });
  },
  methods: {
    addCount: function(eventtype) {
      if (eventtype == "leak") {
        this.leak++;
        db.collection("unko")
          .doc("jQeYF6Me1VOpBKyjkZLq")
          .update({
            leak: this.leak
          })
          .then(() => {
            console.log("登録成功");
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        this.clean++;
        this.leak--;
        db.collection("unko")
          .doc("jQeYF6Me1VOpBKyjkZLq")
          .update({
            clean: this.clean,
            leak: this.leak
          })
          .then(() => {
            console.log("登録成功");
          })
          .catch(() => {
            console.error("エラー情報", error);
          });
      }
    }
  }
};
</script>

<style scoped>
.contentsize {
  font-size: 24px;
}
.backstar {
  background-image: url("../assets/image/kirakira2.png");
  background-size: 25%;
}
</style>
