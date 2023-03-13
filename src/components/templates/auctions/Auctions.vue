<template>
  <div class="container">
    <h3 class="mt-5 mb-5 float-left text-primary">Auction Table</h3>
    <form>
      <table class="table table-striped">
        <thead>
          <tr class="columns">
            <th scope="col">#</th>
            <th scope="col" class="column">Title</th>
            <th scope="col" class="column">Description</th>
            <th scope="col" class="column">Start Date</th>
            <th scope="col" class="column">End Date</th>
            <th scope="col" class="column">Min Price</th>
            <th scope="col" class="column">Max Price</th>
            <th scope="col" class="column">Category</th>
            <th scope="col" class="column">Status</th>
            <th scope="col" class="column">Update</th>
            <th scope="col" class="column">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="m-5"
            :class="{ active: index == currentIndex }"
            v-for="(auction, index) in auctions"
            :key="index"
            @click="setActiveAuction(auction, index)"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ auction.title }}</td>
            <td>{{ auction.description }}</td>
            <td>{{ auction.startDate }}</td>
            <td>{{ auction.endDate }}</td>
            <td>{{ auction.minPrice }}</td>
            <td>{{ auction.maxPrice }}</td>
            <td>{{ auction.category }}</td>
            <td>{{ auction.eauctionStatus }}</td>
            <td>
              <button class="btn btn-primary">
                <RouterLink :to="'/auctions/' + auction.id">Edit</RouterLink>
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                v-on:click="deleteAuction(auction.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <span class="text-success">{{ message }}</span>
      </div>
    </form>
  </div>
</template>

<script>
import AuctionDataService from "../../../services/AuctionDataService";
export default {
  name: "auctions",
  data() {
    return {
      auctions: [],
      showModal: false,
    };
  },
  mounted() {
    this.retrieveAuctions();
  },
  methods: {
    retrieveAuctions() {
      AuctionDataService.getAll()
        .then((response) => {
          this.auctions = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setActiveAuctions(auction, index) {
      this.currentAuction = auction;
      this.currentIndex = auction ? index : -1;
    },
    deleteAuction(id) {
      AuctionDataService.delete(id)
        .then((response) => {
          this.message = "The auction was delete successfully!";
          console.log(response.data);
          this.$router.push({ name: "auctions" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.table {
  width: 700;
}
.btn a {
  color: white;
}
</style>
