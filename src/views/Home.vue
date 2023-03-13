<template>
  <section>
    <div>
      <GreetingItem />
    </div>
    <div>
      <AuctionPage />
    </div>
  </section>
</template>

<script>
import GreetingItem from "../components/molecules/GreetingItem.vue";
import AuctionPage from "../components/templates/auctions/AuctionsPage.vue";

export default {
  name: "HomeView",
  components: { GreetingItem, AuctionPage },
};
</script>

<style>
body {
  background: #eee;
}
</style>
