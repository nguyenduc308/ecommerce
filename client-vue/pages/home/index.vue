<template>
  <div>Home

    <button v-on:click="() => logOut()">Logout</button>

  </div>
</template>

<script>


import { mapActions } from "vuex";
export default {
    middleware: ['authentication'],

    // mounted() {
    //   this.getdata();
    //   console.log(this.getdata());
      
    // },

    methods: {

       ...mapActions('login', ['logout']),

       logOut() {
        this.logout();
      }
    }
    

}
</script>

<style>

</style>