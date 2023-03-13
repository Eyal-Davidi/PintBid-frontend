<template>
  <section>
    <div class="container edit-form mt-5" v-if="currentAuction">
<!-- asdasd -->
      <div class="auction-content auction-wrap clearfix auction-deatil">
        <div class="row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="auction-image">
              <img
                src="../../../assets/pics/wines.jpg"
                class="img-responsive mt-3"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
            <form>
              <div class="form-group">
                <label for="title">Edit the auction name:</label>
                <p>{{ currentAuction.title }}</p>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="currentAuction.title"
                />
              </div>
              <hr />
              <h4 class="price-container">
                €8.50
                <small>*includes tax</small>
              </h4>
              <div class="certified">
                <ul>
                  <li>
                    <a href="">Delivery time<span>7 Working Days</span></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      >Certified<span>Quality Assured</span></a
                    >
                  </li>
                </ul>
              </div>
              <hr />
              <div class="form-group">
                <label for="description"> <b>Description</b></label>
                <p>{{ currentAuction.description }}</p>
                <span>Edit the description below:</span>
                <textarea
                  type="text"
                  class="form-control no-margin"
                  id="description"
                  v-model="currentAuction.description"
                />
              </div>
              
              <span class="text-success">{{ message }}</span>
            </form>
          </div>
        </div>
      </div>


      <button class="btn btn-primary" @click="deleteAuction">Delete</button>
      <a href="/admin">
        <button class="btn btn-primary">Back</button>
      </a>
      <button type="submit" class="btn btn-primary mr-2" @click="updateAuction">
        Update
      </button>
    </div>
    <div v-else>
      <br />
      <p>Please click on a Auction...</p>
    </div>
  </section>
</template>

<script>
import AuctionDataService from "../../../services/AuctionDataService.js";

export default {
  name: "Auction",
  data() {
    return {
      currentAuction: null,
      message: "",
    };
  },
  methods: {
    getAuction(id) {
      AuctionDataService.get(id)
        .then((response) => {
          this.currentAuction = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateAuction() {
      AuctionDataService.update(this.currentAuction.id, this.currentAuction)
        .then((response) => {
          console.log(response.data);
          this.message = "The auction was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteAuction() {
      AuctionDataService.delete(this.currentAuction.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "auctions" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getAuction(this.$route.params.id);
  },
};
</script>

<style scoped>
.btn {
  margin: 10px;
  background-color: rgb(70, 73, 177);
}

body {
  margin-top: 20px;
  background: #eee;
}

.auction-content {
  border: 1px solid #dfe5e9;
  margin-bottom: 20px;
  margin-top: 12px;
  background: #fff;
}

.auction-content .carousel-control.left {
  margin-left: 0;
}

.auction-content .auction-image {
  background-color: #fff;
  display: block;
  min-height: 300px;
  overflow: hidden;
  position: relative;
}

.auction-content .auction-deatil {
  border-bottom: 1px solid #dfe5e9;
  padding-bottom: 17px;
  padding-left: 16px;
  padding-top: 16px;
  position: relative;
  background: #fff;
}

.auction-content .auction-deatil h5 a {
  color: #2f383d;
  font-size: 15px;
  line-height: 19px;
  text-decoration: none;
  padding-left: 0;
  margin-left: 0;
}

.auction-content .auction-deatil h5 a span {
  color: #9aa7af;
  display: block;
  font-size: 13px;
}

.auction-content .auction-deatil span.tag1 {
  border-radius: 50%;
  color: #fff;
  font-size: 15px;
  height: 50px;
  padding: 13px 0;
  position: absolute;
  right: 10px;
  text-align: center;
  top: 10px;
  width: 50px;
}
.auction-content .description {
  font-size: 12.5px;
  line-height: 20px;
  padding: 10px 14px 16px 19px;
  background: #fff;
}

.auction-content .auction-info {
  padding: 11px 19px 10px 20px;
}

.auction-content .auction-info a.add-to-cart {
  color: #2f383d;
  font-size: 13px;
  padding-left: 16px;
}

.auction-content name.a {
  padding: 5px 10px;
  margin-left: 16px;
}

.auction-info.smart-form .btn {
  padding: 6px 12px;
  margin-left: 12px;
  margin-top: -10px;
}

.auction-entry .auction-deatil {
  border-bottom: 1px solid #dfe5e9;
  padding-bottom: 17px;
  padding-left: 16px;
  padding-top: 16px;
  position: relative;
}

.auction-entry .auction-deatil h5 a {
  color: #2f383d;
  font-size: 15px;
  line-height: 19px;
  text-decoration: none;
}

.auction-entry .auction-deatil h5 a span {
  color: #9aa7af;
  display: block;
  font-size: 13px;
}

.auction-info.smart-form .rating label {
  margin-top: 0;
}

.auction-wrap .auction-image span.tag2 {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 10px 0;
  color: #fff;
  font-size: 11px;
  text-align: center;
}

.shop-btn {
  position: relative;
}

.auction-deatil {
  padding: 30px 30px 50px;
}

.auction-deatil hr + .description-tabs {
  padding: 0 0 5px !important;
}

.auction-deatil .carousel-control.left,
.auction-deatil .carousel-control.right {
  background: none !important;
}

.auction-deatil .auction-image {
  border-right: none !important;
}

.auction-deatil .name {
  margin-top: 0;
  margin-bottom: 0;
}

.auction-deatil .name small {
  display: block;
}

.auction-deatil .name a {
  margin-left: 0;
}

.auction-deatil .price-container {
  font-size: 24px;
  margin: 0;
  font-weight: 300;
}

.auction-deatil .price-container small {
  font-size: 12px;
}

.auction-deatil .fa-2x {
  font-size: 16px !important;
}

.auction-deatil .fa-2x > h5 {
  font-size: 12px;
  margin: 0;
}

.auction-deatil .fa-2x + a,
.auction-deatil .fa-2x + a + a {
  font-size: 13px;
}

.profile-message ul {
  list-style: none;
}

.auction-deatil .certified {
  margin-top: 10px;
}

.auction-deatil .certified ul {
  padding-left: 0;
}

.auction-deatil .certified ul li:not(first-child) {
  margin-left: -3px;
}

.auction-deatil .certified ul li {
  display: inline-block;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 13px 19px;
}

.auction-deatil .certified ul li:first-child {
  border-right: none;
}

.auction-deatil .certified ul li a {
  text-align: left;
  font-size: 12px;
  color: #6d7a83;
  line-height: 12px;
  text-decoration: none;
}

.auction-deatil .certified ul li a span {
  display: block;
  color: #4b21b5db;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
}

.auction-deatil .message-text {
  width: calc(100% - 70px);
}
.auction-content div[class*="col-md-4"] {
  padding-right: 0;
}
.auction-content div[class*="col-md-8"] {
  padding: 0 13px 0 0;
}
.auction-wrap div[class*="col-md-5"] {
  padding-right: 0;
}
.auction-wrap div[class*="col-md-7"] {
  padding: 0 13px 0 0;
}
.auction-content .auction-image {
  border-right: 1px solid #dfe5e9;
}
.auction-content .auction-info {
  position: relative;
}
.message img.online {
  width: 40px;
  height: 40px;
}
</style>
