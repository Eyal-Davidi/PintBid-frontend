<template>
  <section>
    <div class="container edit-form mt-5" v-if="currentProduct">
      <!-- product -->
      <div class="product-content product-wrap clearfix product-deatil">
        <div class="row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="product-image">
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
                <label for="name">Edit the product name:</label>
                <p>{{ currentProduct.name }}</p>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="currentProduct.name"
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
                <p>{{ currentProduct.description }}</p>
                <span>Edit the description below:</span>
                <textarea
                  type="text"
                  class="form-control no-margin"
                  id="description"
                  v-model="currentProduct.description"
                />
              </div>
              
              <span class="text-success">{{ message }}</span>
            </form>
          </div>
        </div>
      </div>
      <!-- end product -->

      <button class="btn btn-primary" @click="deleteProduct">Delete</button>
      <a href="/products">
        <button class="btn btn-primary">Back</button>
      </a>
      <button type="submit" class="btn btn-primary mr-2" @click="updateProduct">
        Update
      </button>
    </div>
    <div v-else>
      <br />
      <p>Please click on a Product...</p>
    </div>
  </section>
</template>

<script>
import ProductDataService from "../../../services/ProductDataService";

export default {
  name: "Product",
  data() {
    return {
      currentProduct: null,
      message: "",
    };
  },
  methods: {
    getProduct(id) {
      ProductDataService.get(id)
        .then((response) => {
          this.currentProduct = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateProduct() {
      ProductDataService.update(this.currentProduct.id, this.currentProduct)
        .then((response) => {
          console.log(response.data);
          this.message = "The product was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteProduct() {
      ProductDataService.delete(this.currentProduct.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "products" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getProduct(this.$route.params.id);
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

.product-content {
  border: 1px solid #dfe5e9;
  margin-bottom: 20px;
  margin-top: 12px;
  background: #fff;
}

.product-content .carousel-control.left {
  margin-left: 0;
}

.product-content .product-image {
  background-color: #fff;
  display: block;
  min-height: 300px;
  overflow: hidden;
  position: relative;
}

.product-content .product-deatil {
  border-bottom: 1px solid #dfe5e9;
  padding-bottom: 17px;
  padding-left: 16px;
  padding-top: 16px;
  position: relative;
  background: #fff;
}

.product-content .product-deatil h5 a {
  color: #2f383d;
  font-size: 15px;
  line-height: 19px;
  text-decoration: none;
  padding-left: 0;
  margin-left: 0;
}

.product-content .product-deatil h5 a span {
  color: #9aa7af;
  display: block;
  font-size: 13px;
}

.product-content .product-deatil span.tag1 {
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
.product-content .description {
  font-size: 12.5px;
  line-height: 20px;
  padding: 10px 14px 16px 19px;
  background: #fff;
}

.product-content .product-info {
  padding: 11px 19px 10px 20px;
}

.product-content .product-info a.add-to-cart {
  color: #2f383d;
  font-size: 13px;
  padding-left: 16px;
}

.product-content name.a {
  padding: 5px 10px;
  margin-left: 16px;
}

.product-info.smart-form .btn {
  padding: 6px 12px;
  margin-left: 12px;
  margin-top: -10px;
}

.product-entry .product-deatil {
  border-bottom: 1px solid #dfe5e9;
  padding-bottom: 17px;
  padding-left: 16px;
  padding-top: 16px;
  position: relative;
}

.product-entry .product-deatil h5 a {
  color: #2f383d;
  font-size: 15px;
  line-height: 19px;
  text-decoration: none;
}

.product-entry .product-deatil h5 a span {
  color: #9aa7af;
  display: block;
  font-size: 13px;
}

.product-info.smart-form .rating label {
  margin-top: 0;
}

.product-wrap .product-image span.tag2 {
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

.product-deatil {
  padding: 30px 30px 50px;
}

.product-deatil hr + .description-tabs {
  padding: 0 0 5px !important;
}

.product-deatil .carousel-control.left,
.product-deatil .carousel-control.right {
  background: none !important;
}

.product-deatil .product-image {
  border-right: none !important;
}

.product-deatil .name {
  margin-top: 0;
  margin-bottom: 0;
}

.product-deatil .name small {
  display: block;
}

.product-deatil .name a {
  margin-left: 0;
}

.product-deatil .price-container {
  font-size: 24px;
  margin: 0;
  font-weight: 300;
}

.product-deatil .price-container small {
  font-size: 12px;
}

.product-deatil .fa-2x {
  font-size: 16px !important;
}

.product-deatil .fa-2x > h5 {
  font-size: 12px;
  margin: 0;
}

.product-deatil .fa-2x + a,
.product-deatil .fa-2x + a + a {
  font-size: 13px;
}

.profile-message ul {
  list-style: none;
}

.product-deatil .certified {
  margin-top: 10px;
}

.product-deatil .certified ul {
  padding-left: 0;
}

.product-deatil .certified ul li:not(first-child) {
  margin-left: -3px;
}

.product-deatil .certified ul li {
  display: inline-block;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 13px 19px;
}

.product-deatil .certified ul li:first-child {
  border-right: none;
}

.product-deatil .certified ul li a {
  text-align: left;
  font-size: 12px;
  color: #6d7a83;
  line-height: 12px;
  text-decoration: none;
}

.product-deatil .certified ul li a span {
  display: block;
  color: #4b21b5db;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
}

.product-deatil .message-text {
  width: calc(100% - 70px);
}
.product-content div[class*="col-md-4"] {
  padding-right: 0;
}
.product-content div[class*="col-md-8"] {
  padding: 0 13px 0 0;
}
.product-wrap div[class*="col-md-5"] {
  padding-right: 0;
}
.product-wrap div[class*="col-md-7"] {
  padding: 0 13px 0 0;
}
.product-content .product-image {
  border-right: 1px solid #dfe5e9;
}
.product-content .product-info {
  position: relative;
}
.message img.online {
  width: 40px;
  height: 40px;
}
</style>
