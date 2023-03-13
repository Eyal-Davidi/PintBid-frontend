<template>
    <div class="container">
        <p>asdasdasdasdasdd</p>
        <!-- <p> offerID: {{ offer.id }}</p>
        <p>offering Price: {{ offer.offeringPrice }}</p>
        <p>offer user ID: {{ offer.userId }}</p>
        <p> offer auction id: {{ offer.auctionId }}</p>
        <p>offer accepted: {{ offer.accepted }}</p>
        <p> offer quantity: {{ offer.quantity }} </p> -->
    </div>
</template>
<script lang="ts">
import OfferDataService from "../../../services/OfferDataService.js";
  
  export default {
    name: "offer",
    data() {
      return {
        currentOffer: null,
        message: "",
      };
    },

    mounted() {
      this.message = "";
      this.getOffer(this.$route.params.id);
    },

    methods: {
      getOffer(id) {
        OfferDataService.get(id)
          .then((response) => {
            this.currentOffer = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updateOffer() {
        OfferDataService.update(this.currentOffer.id, this.currentOffer)
          .then((response) => {
            console.log(response.data);
            this.message = "The offer was updated successfully!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      deleteOffer() {
        OfferDataService.delete(this.currentOffer.id)
          .then((response) => {
            console.log(response.data);
            this.$router.push({ name: "offer" });
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
        },
  
      //   return false;
      // },
      // showModeratorBoard() {
      //   if (this.currentUser && this.currentUser.roles) {
      //     return this.currentUser.roles.includes("ROLE_MODERATOR");
      //   }
  
      //   return false;
      // },
    }
  };
  </script>