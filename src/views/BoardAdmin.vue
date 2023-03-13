<template>
  <div>
    <Users />
  </div>
  <div>
    <Auctions />
  </div>
</template>
<script>
import Users from "../components/templates/users/Users.vue";
import Auctions from "../components/templates/auctions/Auctions.vue";

export default {
  name: "dashboard",
  components: { Users, Auctions },
};
</script>
<style></style>
