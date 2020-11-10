<template>
  <div class="userPage">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light justify-content-between"
    >
      <div>
        <router-link to="/user/Pradip"
          ><a class="navbar-brand">Home</a></router-link
        >
      </div>
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
              >
                {{ this.uId }}
              </a>
              <div
                class="dropdown-menu dropdown-menu-sm-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link
                  :to="'/user/' + uId + '/profile'"
                  active-class="active"
                  ><a class="dropdown-item">Profile</a></router-link
                >
                <router-link :to="'/user/' + uId + '/setting'"
                  ><a class="dropdown-item">Setting</a></router-link
                >
                <router-link
                  to="/user/Pradip/NotFound"
                  @click.native="errHandle"
                  ><a class="dropdown-item">Err! 404</a>
                </router-link>
                <router-link :to="'/login'" @click.native="signOut"
                  ><a class="dropdown-item">SignOut</a>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "userPage",
  data() {
    return {
      info: undefined,
      uId: this.id,
    };
  },

  props: ["id"],
  methods: {
    errHandle() {
      alert("The Page Doesn't exist");
    },

    signOut() {
      console.log(store.user);
      store.user = null;
    },
  },
};
</script>

<style scoped>
#ul_nav li {
  list-style-type: none;
  padding: 10px;
  display: inline-flex;
}
</style>
