<template>
  <div id="auctions-details-page">
    <AuctionDetails />
  </div>
</template>
<script>
import AuctionDetails from "../auctions/AuctionDetails.vue";

export default {
  components: { AuctionDetails },
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
  },
};
</script>
<style></style>
