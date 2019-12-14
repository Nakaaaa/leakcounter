const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

let firestore = admin.firestore();

exports.resetUnkoCount = functions.pubsub
  .schedule("0 0 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(context => {
    let unkoRef = firestore.collection("unko");
    unkoRef
      .doc("jQeYF6Me1VOpBKyjkZLq")
      .update({
        clean: 0,
        leak: 0
      })
      .then(() => {
        return console.log("登録成功");
      })
      .catch(error => {
        return console.error(error);
      });
  });
