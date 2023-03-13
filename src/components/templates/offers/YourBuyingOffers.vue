<template>
  <!-- <div class="container">
    <h5>Sort by:</h5>
    <h6>
        <button @click="sortByEndDate"> Ending Date</button>
        <button @click="sortByCategory"> Drink Type</button>
        <button @click="sortByAvailability"> Availability</button>
    </h6> -->
         
    <h3 class="mt-5 mb-5 float-left text-primary">Your Buying Offers</h3>
    <table class="table table-striped">
      <thead>
        <tr class="columns">
          <th scope="col" >#</th>
          <th scope="col" class="column">Offering Price</th>
          <th scope="col" class="column">Offer quantity</th>
          <th scope="col" class="column">User Id</th>
          <th scope="col" class="column">Offer Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="m-5"
         :class="{ active: index == currentIndex }"
         v-for="(offer, index) in userOffers" :key="index" >
          <th scope="row" >{{ index + 1 }} </th>
          <td>{{ offer.offeringPrice }}</td>
          <td>{{ offer.quantity }}</td>
          <td> {{ offer.userId }}</td>
          <td v-if="offer.accepted==false">/</td>
          <td v-else> Your offer got accepted! </td>
          <td>
            </td>
            <td>
            </td>
        </tr>
     
      </tbody>
    </table>
   

 
</template>

<script>
import OfferDataService from "../../../services/OfferDataService";

export default {
  name: 'offers',
  data() {
    return {
      offers: [],
      showModal: false,
      
  }},
  mounted() {
    this.retrieveOffers();
  
  },
  methods: {
    retrieveOffers() {
      OfferDataService.getAll()
        .then(response => {
          this.offers = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveOffers(offer, index) {
      this.currentOffer = offer;
      this.currentIndex = offer ? index : -1;
    },
   
  },

  computed:{
      userOffers() {
        if(this.offers.length>0){
          return this.offers.filter(a => a.userId === parseInt(this.$route.params.id) )
        }
        }
    },
}
</script>

<style scoped>
.table{
  width: 700 ;
}
</style>










<!-- <template>
    <div class="container">
      <h5>Thank your placing a bid!</h5>  
      <h3>Your buying offers list</h3>  -->
      <!-- <h3 class="mt-5 mb-5 float-left text-primary">Auction Table</h3> -->
      <!-- <table class="table table-striped">
        <thead>
          <tr class="columns">
            <th scope="col" >#</th>
            <th scope="col" class="column">Auction Title</th>
            <th scope="col" class="column">Auction End Date</th>
            <th scope="col" class="column">Offered Price</th>
            <th scope="col" class="column">Desired quantity</th>
            <th scope="col" class="column">Desired Delivery Date</th>
            <th scope="col" class="column">Details</th>
            <th scope="col" class="column">Status</th> -->
            <!-- TODO: FETCH DATA OF ALL USER'S OFFERS - THE CODE BELOW IS FOR AUCTION AND NOT WORKING
            NEED TO CHANGE TO OFFER -->
            <!-- <div class="container edit-form mt-5" v-if="currentAuction">
                <p>{{ currentAuction.title }}</p>
                <p>asdasdasdasdasd</p>
            </div>
            <div class="container edit-form mt-5" v-else> 
                <p>{{ currentAuction.id }}</p>
                <p>lplpplplplplplplplp</p>
                </div> -->
          <!-- </tr>
        </thead>
      </table>
    </div> -->

  <!-- </template>

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

  mounted() {
    this.message = "";
    this.getAuction(this.$route.params.id);
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

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }
      }, -->

    <!-- //   return false;
    // },
    // showModeratorBoard() {
    //   if (this.currentUser && this.currentUser.roles) {
    //     return this.currentUser.roles.includes("ROLE_MODERATOR");
    //   }

    //   return false;
    // },
//   }
// };
// </script> -->