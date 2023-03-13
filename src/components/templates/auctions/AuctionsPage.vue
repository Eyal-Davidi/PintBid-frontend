<template>
  <div>
    <h3> You can choose from these auctions:</h3>
    <HomeAuctions />
  </div>
</template>
<script>
import HomeAuctions from "../auctions/HomeAuctions.vue";

export default {
  name: "AuctionPage",
  components: { HomeAuctions },
  data() {
    return {
      currentAuction: null,
      message: "",
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
<style></style>
