<template>
  <div class="submit-form card">
    <h3>Add new product to sell</h3>
    <div class="">
      <img
        id="profile-img"
        src="../../../assets/pics/wines.jpg"
        class="profile-img-card"
      />
      <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            required
            v-model="product.name"
            name="name"
          />
        </div>
        <div class="form-group">
          <label for="description">description</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="product.description"
            name="description"
          />
        </div>
        <div class="form-group">
          <label for="minPrice">minPrice</label>
          <input
            class="form-control"
            id="minPrice"
            required
            v-model="product.minPrice"
            name="minPrice"
          />
        </div>
        <div class="form-group">
          <label for="expectedPrice">expectedPrice</label>
          <input
            class="form-control"
            id="expectedPrice"
            required
            v-model="product.expectedPrice"
            name="expectedPrice"
          />
        </div>
        <div class="form-group">
          <label for="expectedDeliveryTimeInDays"
            >expectedDeliveryTimeInDays</label
          >
          <input
            class="form-control"
            id="expectedDeliveryTimeInDays"
            required
            v-model="product.expectedDeliveryTimeInDays"
            name="expectedDeliveryTimeInDays"
          />
        </div>

        <button @click="saveProduct" class="btn btn-success">Submit</button>
      </div>

      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-primary" @click="newProduct">Add</button>
        <a href="/products">
        <button class="btn btn-primary">All products</button>
      </a>
      
       
      </div>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../../../services/ProductDataService";
export default {
  name: "add-product",
  data() {
    return {
      product: {
        id: null,
        userId: "",
        name: "",
        description: "",
        image: "",
        minPrice: "",
        expectedPrice: "",
        expectedDeliveryTimeInDays: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveProduct() {
      var data = {
        userId: "",
        name: this.product.name,
        description: this.product.description,
        image: this.product.image,
        minPrice: this.product.minPrice,
        expectedPrice: this.product.expectedPrice,
        expectedDeliveryTimeInDays: this.product.expectedDeliveryTimeInDays,
      };
      ProductDataService.create(data)
        .then((response) => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newProduct() {
      this.submitted = false;
      this.product = {};
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 600px;
  margin: auto;
  margin-top: 50px;
  padding: 40px 40px;
}


h3{
  text-align: center;
}
label {
  display: block;
  margin-top: 10px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 200px;
  height: 200px;
  border-radius: 40%;
  margin: 0 auto 10px;
  display: block;
}
</style>
