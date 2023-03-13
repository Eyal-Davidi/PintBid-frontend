<template>
<!-- ml;kml;km;lkm;lkm;l,;l,;,;l -->
  <div class="auction-item mt-5 mb-5" v-bind:class="{ 'is-complete': auction.completed }">
    <div class="d-flex justify-content-center row">
      <div class="col-md-10">
        <div class="row p-2 bg-white border rounded">
          <div class="col-md-3 mt-1">
            <img
              class="img-fluid img-responsive rounded product-image"
              v-bind:src="auction.src"
            />
            <div class="logged" v-if="user">
              <input
                type="checkbox"
                v-on:change="markComplete"
                v-bind:checked="auction.completed"
              />
              <button v-on:click="$emit('del-auction', auction.id)" class="del">x</button>
            </div>
          </div>
          <div class="col-md-6 mt-1">
            <h5>{{ auction.title }}</h5>
            <div class="d-flex justify-content-center flex-row">
              <div class="dates mr-2">
                <strong> {{ auction.startDate }} - {{ auction.endDate }} </strong>
              </div>
            </div>
            <div v-if="auction.completed">Auction is completed</div>
            <div v-else>Auction is open</div>

            <p class="text-justify text-truncate para mb-0">
              {{ auction.description }}<br /><br />
            </p>
            <div class="mt-1 mb-1 spec-1">
              <span class="dot"></span> <span>{{ auction.category }}</span>
            </div>
          </div>

          <div class="align-items-center align-content-center col-md-3 border-left mt-1">
            <div class="d-flex flex-row">
              <h4 class="mr-1">Starting price: {{ auction.startingPrice }}</h4>
            </div>

            <h6 class="text-success">Free shipping</h6>
            <div class="d-flex flex-column mt-4">
              <button class="btn btn-primary btn-sm" type="button">Details</button
              ><button class="btn btn-outline-primary btn-sm mt-2" type="button">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  name: "AuctionItem",
  props: ["auction"],
  data() {
    return {
      user: null,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    markComplete() {
      // eslint-disable-next-line vue/no-mutating-props
      this.auction.completed = !this.auction.completed;
    },
  },
};
</script>

<style scoped>
.auction-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete h5 {
  color: #989898;
}

h5 {
  color: rgb(254, 207, 20);
}
.product-image {
  width: 100%;
}
.dot {
  height: 7px;
  width: 7px;
  margin-left: 6px;
  margin-right: 6px;
  margin-top: 3px;
  background-color: blue;
  border-radius: 50%;
  display: inline-block;
}
.spec-1 {
  color: #938787;
  font-size: 15px;
}
h5 {
  font-weight: 400;
}
.para {
  font-size: 16px;
}

.del {
  background: #a0a0a0;
  color: #fff;
  border: none;
  margin: 3px;
  padding: 5px 5px;
  border-radius: 30%;
  cursor: pointer;
}
.d-flex.flex-row {
  color: #989898;
  font-size: 14px;
  align-content: flex-end;
}
</style>
