<template>
  <section class="d-flex justify-content-center row mt-5 mb-5">
    <img alt="Pint Bid Logi" class="logo" src="@/assets/pics/pintbidlogo.svg" />
    <div class="text">
      <div class="logged" v-if="currentUser">
        <h1 class="greeting">Bid your pint!</h1>
        <h3>Welcome {{ currentUser.firstname }}</h3>
        <span>Bid or sell your favourite brewery with us!</span>
      </div>

      <div class="not-logged" v-else="!currentUser">
        <h3> Welcome to Pint Bid.</h3>
        <span>You are not logged in. </span> 
        <span> Please register to bid or sell!</span>
        <div>
          <RouterLink to="/login" class="btn btn-primary btn-lg">Log in</RouterLink>
          <RouterLink to="/register" class="btn btn-primary btn-lg">Sign Up</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "LoginStatusInfoItem",
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
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_MODERATOR");
      }

      return false;
    },
  },
};
</script>

<style scoped>
img {
  width: 20%;
}

.btn {
  margin: 10px;
  background-color: rgb(70, 73, 177);
  border-color: rgb(81, 70, 177);
}

.text {
  padding-left: 100px;
  padding-top: 50px;
}
.not-logged, .logged{
  text-align: center;
  align-items: center;
}
</style>
