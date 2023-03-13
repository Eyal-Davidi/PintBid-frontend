<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-xl-11">
            <div class="list row">
              <div class="col-md-8">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search by product name"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h5>Product List</h5>
                <p>Click on a product and see details</p>
                <div class="product">
                  <ul class="list-group">
                    <li
                      class="list-group-item"
                      :class="{ active: index == currentIndex }"
                      v-for="(product, index) in products"
                      :key="index"
                      @click="setActiveProduct(product, index)"
                    >
                      {{ product.name }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div v-if="currentProduct">
                  <h4>Product</h4>
                  <div>
                    <label><strong>Name:</strong></label>
                    {{ currentProduct.name }}
                  </div>
                  <div>
                    <label><strong>Description:</strong></label>
                    {{ currentProduct.description }}
                  </div>
                 

                  <RouterLink
                    :to="'/products/' + currentProduct.id"
                    class="badge edit"
                    >Edit</RouterLink
                  >
                </div>
                <div v-else>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductDataService from "../../../services/ProductDataService";

export default {
  name: "product-list",
  data() {
    return {
      products: [],
      currentProduct: null,
      currentIndex: -1,
      name: "",
    };
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveProducts();
      this.currentProduct = null;
      this.currentIndex = -1;
    },

    setActiveProduct(product, index) {
      this.currentProduct = product;
      this.currentIndex = product ? index : -1;
    },

    removeAllProducts() {
      ProductDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveProducts();
  },
};
</script>

<style scoped>
img.img-fluid {
  width: 40%;
}

h5 {
  font-weight: bold;
  font-style: normal;
  color: rgb(102, 90, 102);
}
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

<style scoped > .product {
  flex: 1 1 33.333%;
  width: 100%;
  padding: 25px;
}

.product-inner {
  position: relative;
  padding: 25px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}

img {
  width: 100%;
}
.product-text-wrap h2 {
  color: #313131;
  font-size: 100px;
  font-weight: 900;
  opacity: 0.2;
  transform-origin: center;
}
.product-image-wrap {
  position: relative;
  z-index: 1;
  transform-origin: center;
}

.product-detail {
  background-color: #fff;
  padding: 25px;
  margin: 0px 0px 0px;
}
.product-detail h2 {
  font-size: 24px;
  font-weight: 700;
  color: #676767;
  margin-bottom: 15px;
}
.product-detail p {
  font-size: 14px;
  line-height: 1.5;
  font-weight: 300;
  color: #676767;
}
.product-detail .price {
  font-weight: bold;
  font-style: normal;
  color: rgb(43, 6, 81);
}

.status {
  font-weight: bold;
  font-style: normal;
  color: rgb(102, 90, 102);
}

.edit {
  font-size: 15px;
}
</style>
