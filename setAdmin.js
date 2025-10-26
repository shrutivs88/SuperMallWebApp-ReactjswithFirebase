// import admin from "firebase/admin"

const admin = require("firebase-admin");
admin.initializeApp();

const uid = "admin@example.com";

admin.auth().setCustomUserClaims(uid, { admin: true }).then(() => {
  console.log("Admin claim added!");
});
