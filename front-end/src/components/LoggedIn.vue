<template>
  <div> <!-- id of app should only be in your highest level component-->

  </div>

</template>

<script>
/*Note authentication database is our users database.
Can update structure of data in database by usin userid in authentication section. Can have multiple users. Change users in firebase to be*/
import axios from "axios";
import firebase from "firebase";
import "firebaseui/dist/firebaseui.css"; /*import css file can be found in the firebaseui module. All we need to do is impor tthe stylesheet here.*/
import db from"../utils/firebaseConfig.js";
export default {
  name:"loggedin",
  data () {
    return {
      msg:"Welcome to your profile",
      userName:"testing name",
      email:"testing email",
      userId:"testing id"
    }
  },
  firebase: {
    // users: db.ref("users") /*Going to pull in everything under users.
    /*Now can only pull in data specific to the id. In this case emporer's new groove, and Krook's new goorve*/
    // users: db.ref("users/rUROnBE6VPMGKms0PJDoLjduHLd2")
    users: db.ref("users")
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.userName = firebase.auth().currentUser.displayName;
          this.email = firebase.auth().currentUser.email;
          this.userId = firebase.auth().currentUser.uid;
        }
        /*bindAsArray is a vueFire thing.*/
    })
  },
  methods: {
    save() {
      let user = firebase.auth().currentUser;
      user.updateProfile({
        displayName:this.userName
      })
    }
  }
 }
 /*In authentication section of firebase, we cannot chagne the structure of it. Authentication section is its own database. Database section in console, we can change it. It is its own database as well.*/
</script>
