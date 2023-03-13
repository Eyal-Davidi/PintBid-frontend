<template>
  <section>
    <div class="row">
      <div class="col-md-6">
        <ProfileImage />
      </div>
      <div class="col-md-6 profile">
        <h3>Your Profile Setting</h3>
        <span class="font-weight-bold"> Hi, {{ currentUser.firstname }}</span>
        <p class="text-black-50">
          You can edit your profile information below. Please be aware that your username:
          {{ currentUser.lastname }} cannot be change due to login criteria.
        </p>
        <div v-if="currentUser" class="edit-form"></div>
        <div class="row mt-2" v-on:submit="updateUser">
          <div class="col-md-8">
            <label class="labels">First Name</label
            ><input
              type="text"
              class="form-control"
              placeholder="firstname"
              name="new_firstname"
              v-model="firstname"
            />
          </div>
          <div class="col-md-8">
            <label class="labels">Last Name</label
            ><input
              type="text"
              class="form-control"
              placeholder="lastname"
              name="new_lastname"
              v-model="lastname"
            />
          </div>
        </div>
        <div class="row mt-2" v-on:submit="updateUser">
          <div class="col-md-8">
            <label class="labels">Email</label
            ><input
              type="text"
              class="form-control"
              placeholder="email"
              name="new_email"
              v-model="new_email"
            />
          </div>
          <div class="col-md-8">
            <label class="labels">Password</label
            ><input
              type="text"
              class="form-control"
              placeholder="password"
              name="new_password"
              v-model="password"
            />
          </div>
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-success mt-1" @click="updateUser">
            Save Profile
          </button>
        </div>
        <div>
          <RouterLink :to="{ name: 'yourSellingOffers', params: { id: currentUser.id }}"
         class="logged" v-if="currentUser">Your selling Offers</RouterLink>
        </div>
        <div>
         <RouterLink :to="{ name: 'yourBuyingOffers', params: { id: currentUser.id }}"
         class="logged" v-if="currentUser">Your Buying Offers</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProfileImage from "../atoms/ProfileImage.vue";
import UserDataService from "../../services/UserDataService";

export default {
  name: "ProfileEditor",
  components: { ProfileImage },
  data() {
    return {
      currentUser: null,
      message: "",
    };
  },
  methods: {
    getUser(id) {
      UserDataService.get(id)
        .then((response) => {
          this.currentUser = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateUser() {
      UserDataService.update(this.currentUser.id, this.currentUser)
        .then((response) => {
          console.log(response.data);
          this.message = "The user profile was updated successfully!";
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
  },
};
</script>

<style scoped>
h3 {
  font-weight: bold;
  font-style: normal;
  color: rgb(102, 90, 102);
}
.profile {
  padding-top: 40pt;
}
</style>
