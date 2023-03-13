<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Home</RouterLink>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link" v-if="!currentUser"
              >Login</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/register" class="nav-link" v-if="!currentUser"
              >Sign Up</RouterLink
            >
          </li>
          <li class="nav-item">
            <a v-on:click="logOut" class="nav-link" href="#" v-if="currentUser"
              >Logout</a
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/profile" class="nav-link" v-if="currentUser"
              >My Profile</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/help" class="nav-link">Help</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/imprint" class="nav-link">Imprint</RouterLink>
          </li>

          <li v-if="showAdminBoard" class="nav-item">
            <RouterLink to="/admin" class="nav-link">Admin board</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink to="/products" class="nav-link" v-if="currentUser"
              >Products</RouterLink
            >
          </li>

          <li v-if="showAdminBoard" class="nav-item">
            <RouterLink to="/offers" class="nav-link" v-if="currentUser">Offers</RouterLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationItem",
  data() {
    return {
      user: null,
    };
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}
</style>
