<template>
  <div class="login">
    <h2>Login</h2>
    <div class="row">
        <div class="col-3"></div>
        <div class="col">
      <form class="cuForm justify-content-lg-center">
        <div class="form-group">
          <label for="userName"> </label>
          <input
            v-model="userName"
            type="text"
            id="username"
            class="form-control"
            placeholder="Enter Username"
          />
          <small id="emailHelp" class="form-text text-muted text-left">
            Your Information is safe with us.</small
          >
        </div>
        <div class="form-group">
          
          <input
            v-model="password"
            @keyup.enter="login"
            class="form-control"
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button class="btn btn-info" type="button" @click="login">Login</button>
      </form>
      </div>
      <div class="col-3"></div>
    </div>
   
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      userName: null,
      password: null,
    };
  },
  methods: {
    login() {
      if(this.userName && this.password) {
          store.user = this.userName;
    this.$router.push(store.redirect + this.userName)
        .catch(error => {
            console.info(error.message)
        });
      } else {
          console.info("Username and Passord is must.");
      }
    },
  },     
};
</script>