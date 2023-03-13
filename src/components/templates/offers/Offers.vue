  <template>
    <!-- <div class="container">
      <h5>Sort by:</h5>
      <h6>
          <button @click="sortByEndDate"> Ending Date</button>
          <button @click="sortByCategory"> Drink Type</button>
          <button @click="sortByAvailability"> Availability</button>
      </h6> -->
           
      <h3 class="mt-5 mb-5 float-left text-primary">Offers Table</h3>
      <table class="table table-striped">
        <thead>
          <tr class="columns">
            <th scope="col" >#</th>
            <th scope="col" class="column">Offer Id</th>
            <th scope="col" class="column">Offering Price</th>
            <th scope="col" class="column">Offer quantity</th>
            <th scope="col" class="column">Offer Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="m-5"
           :class="{ active: index == currentIndex }"
           v-for="(offer, index) in offers" :key="index" >
            <th scope="row" >{{ index + 1 }} </th>
            <td> {{ offer.id }}</td>
            <td>{{ offer.offeringPrice }}</td>
            <td>{{ offer.quantity }}</td>
            <td v-if="offer.accepted==false">/</td>
            <td v-else> Accepted Offer </td>
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
    }
  }
  </script>
  <style scoped>
  .table{
    width: 700 ;
  }
  </style>
  