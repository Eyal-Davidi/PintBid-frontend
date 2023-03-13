<template>
  <div id="auction-list">
    <section class="auctions" v-bind:key="auction.id" v-for="auction in auctions">
      <AuctionCard
        v-bind:auction="auction"
        v-on:del-auction="$emit('del-auction', auction.id)"
      />
    </section>
  </div>
</template>

<script>
import AuctionCard from "../atoms/AuctionCard.vue";

export default {
  name: "AuctionsComponent",
  components: { AuctionCard },
  props: ["auctions"],
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
