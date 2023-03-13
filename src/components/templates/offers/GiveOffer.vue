<!-- As a bidder, I would like to place orders for an auction to participate in the competition. 
I can also specify my conditions (price, quantity, delivery date) for a selected auction -->

<template>
    <div class="submit-form card">
      <h3>Place your offer here</h3>
      <div class="">
        <div v-if="!submitted">
          <div class="form-group">
            <label for="name">Price: </label>
            <input
              type="text"
              class="form-control"
              id="title"
              required
              v-model="auction.title"
              name="title"
            />
          </div>
          <div class="form-group">
            <label for="description">Quantity: </label>
            <input
              class="form-control"
              id="description"
              required
              v-model="auction.description"
              name="description"
            />
          </div>
          <div class="form-group">
            <label for="minPrice">Delivery Date: </label>
            <input
              class="form-control"
              id="minPrice"
              required
              v-model="auction.minPrice"
              name="minPrice"
            />
          </div>

          <!-- TODO: NEED TO MAKE SUBMIT BUTTON WORK OR SHOW A MESSAGE: "THANK YOU FOR YOUR BID"XXX -->
          <!-- <button @click="saveAuction" class="btn btn-success">Submit</button> -->
          <!-- <RouterLink to="/your-buying-offers" class="btn btn-success">Submit</RouterLink> -->
          <button class="btn btn-success">Submit</button>
        </div>
  
        <div v-else>
          <h4>You submitted successfully!</h4>
          <button class="btn btn-primary" @click="newAuction">Add</button>
          <a href="/auctions">
            <button class="btn btn-primary">All auctions</button>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AuctionDataService from "../../../services/AuctionDataService";
  export default {
    name: "add-auction",
    data() {
      return {
        auction: {
          id: null,
          title:"",
          description:"",
          minPrice :"",
          maxPrice:"",
          startDate :"",
          endDate :"",
          buyerId:"",
          sellerId :"",
          eauctionStatus:"",
          productId :"",
          category :""
        },
        submitted: false,
      };
    },
    methods: {
      saveAuction() {
        var data = {
          title: this.title,
          description: this.description ,
          minPrice:  this.minPrice,
          maxPrice: this.maxPrice ,
          startDate:  this.startDate,
          endDate:  this.endDate,
          buyerId: this.buyerId,
          sellerId: "",
          eauctionStatus :"",
          productId : "",
          category:  "",
        };
        AuctionDataService.create(data)
          .then((response) => {
            this.auction.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      newAuction() {
        this.submitted = false;
        this.auction = {};
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
  
  h3 {
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
