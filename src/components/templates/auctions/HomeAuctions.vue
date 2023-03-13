<template>
    <div class="container">

      <!-- <h3><RouterLink :to="{ name: 'addAuction', params: { id: auction.sellerId }}"
         class="logged" v-if="currentUser">Add Auction</RouterLink></h3> -->

      <h3><RouterLink to="/add-auction" class="logged" v-if="currentUser">Add Auction</RouterLink></h3>
    
      <!-- <RouterLink :to="{ name: 'add-auction', params: { id: auction.sellerId }}" 
                class="btn btn-primary btn-sm"> Details </RouterLink> -->
      <!-- <h3><RouterLink :to="{ name: 'add-auction', params: { id: auction.sellerId }}" class="logged" v-if="currentUser">Add Auction</RouterLink></h3> -->
      <!-- <h3><RouterLink to="/add-auction" class="logged" v-if="currentUser">Add Auction</RouterLink></h3> -->
      <h5>Sort by:</h5>
      <h6><button @click="sortByStartDate"> Starting Date</button>
          <button @click="sortByEndDate"> Ending Date</button>
          <button @click="sortByStartingPrice"> Starting Price</button>
          <button @click="sortByCategory"> Drink Type</button>
          <button @click="sortByAvailability"> Availability</button>
      </h6>       
          
      <!-- <h3 class="mt-5 mb-5 float-left text-primary">Auction Table</h3> -->
      <table class="table table-striped">
        <thead>
          <tr class="columns">
            <th scope="col" >#</th>
            <th scope="col" class="column">Title</th>
            <!-- <th scope="col" class="column">Description</th> -->
            <th scope="col" class="column">Start Date</th>
            <th scope="col" class="column">End Date</th>
            <th scope="col" class="column">Starting Price</th>
            <!-- <th scope="col" class="column">Max Price</th> -->
            <th scope="col" class="column">Category</th>
            <th scope="col" class="column">Status</th>
            <th scope="col" class="column">Details</th>
            <th scope="col" class="column">Bid</th>
          </tr>
        </thead>
        <tbody>
          <!-- @click="setActiveAuction(auction, index)" ??? -->
          <tr class="m-5"
           :class="{ active: index == currentIndex }"
           v-for="(auction, index) in auctions" :key="index" >
            <th scope="row" >{{ index + 1 }} </th>
            <td>{{ auction.title }}</td>
            <!-- <td>{{ auction.description }}</td> -->
            <td>{{ auction.startDate }}</td>
            <td>{{ auction.endDate }}</td>
            <!-- <td v-if="auction.highestBid==''">{{ auction.minPrice }}</td>
                <td v-else> {{ auction.highestBid }} </td> -->
            <td>{{ auction.minPrice }}</td>
            <!-- <td>{{ auction.maxPrice }}</td> -->
            <td>{{ auction.category }}</td>
            <td>{{ auction.eauctionStatus }}</td>
            <td>
              <!-- <button class="btn btn-warning">
                  Update
                </button> -->
                <RouterLink :to="{ name: 'auctionsDetails', params: { id: auction.id }}" 
                class="btn btn-primary btn-sm"> Details </RouterLink>
              </td>
              <td>
               <!-- <button class="btn btn-danger" v-on:click="deleteAuction(currentAuction.id)">
                  Delete</button> -->

                <!-- <RouterLink :to="{ name: 'giveOffer', params: { id: offer.id }}"  -->
                  <RouterLink to="/give-offer" class="logged" v-if="currentUser">Bid</RouterLink>
                <!-- <button class="logged" v-if="currentUser" type="button">Bid</button> -->
                <p class="logged" v-else>Please register to bid</p>
              </td>
              <!-- <div>
        <h3><RouterLink :to="{ name: 'addAuction', params: { id: auction.sellerId }}"
         class="logged" v-if="currentUser">Add Auction</RouterLink></h3>
      </div> -->

              <!-- <RouterLink :to="{ name: 'addAuction', params: { id: auction.sellerId }}"
         class="logged" v-if="currentUser">Add Auction</RouterLink> -->

         <!-- <RouterLink :to="{ name: 'yourSellingOffers', params: { id: user.id }}"
         class="logged" v-if="currentUser">Your selling Offers</RouterLink> -->

         <!-- <RouterLink :to="{ name: 'yourSellingOffers', params: { id: auction.sellerId }}" 
        @click="saveAuction" class="btn btn-success">Submit</RouterLink>  -->

          </tr>
       
        </tbody>
      </table>

    </div>
  
   
  </template>
  
  
  <script>
  // import AuctionDataService from "../../../services/AuctionDataService";
  import AuctionDataService from '../../../services/AuctionDataService';
  
  export default {
    name: 'auctions',
    
    data() {
      return {
        auctions: [],
        showModal: false,
        
    }},
    mounted() {
      this.retrieveAuctions();
    
    },
    methods: {
      retrieveAuctions() {
        AuctionDataService.getAll()
          .then(response => {
            this.auctions = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
      setActiveAuctions(auction, index) {
        this.currentAuction = auction;
        this.currentIndex = auction ? index : -1;
      },
    },
  
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      showAdminBoard() {
        if (this.currentUser && this.currentUser.roles) {
          return this.currentUser.roles.includes("ROLE_ADMIN");
        }
  
        return false;
      },
      showModeratorBoard() {
        if (this.currentUser && this.currentUser.roles) {
          return this.currentUser.roles.includes("ROLE_MODERATOR");
        }
  
        return false;
      },
      
      sortByStartDate(){
        this.auctions.sort((a,b) => a.startDate > b.startDate ? 1 : -1);
      },
      sortByEndDate(){
        this.auctions.sort((a,b) => a.endDate > b.endDate ? 1 : -1);
      },
      sortByStartingPrice(){
        this.auctions.sort((a,b) => parseFloat(a.minPrice) > parseFloat(b.minPrice) ? 1 : -1);
      },
      sortByCategory(){
        this.auctions.sort((a,b) => a.category > b.category ? 1 : -1);
      },
      sortByAvailability(){
        this.auctions.sort((a,b) => a.eauctionStatus> b.eauctionStatus ? 1 : -1);
      },
      // onlyAvailables() {
      //   if(this.auctions.length>0){
      //     return this.auctions.filter(a => a.eauctionStatus === "ACTIVE")
      //   }
      //   }
    },
  };
  </script>
  
  <style scoped>
  .table{
    width: 700 ;
  }
  </style>
  