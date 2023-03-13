<template>
  <div>
    <h3>User</h3>
    <div class="container">
      <form @submit="validateAndSubmit">
        <div v-if="errors.length">
          <div
            class="alert alert-danger"
            v-bind:key="index"
            v-for="(error, index) in errors"
          >
            {{ error }}   
          </div>
        </div>
        <fieldset class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" v-model="firstName" />
        </fieldset>
        <fieldset class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" v-model="lastName" />
        </fieldset>
        <fieldset class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="email" />
        </fieldset>
        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>

import UserDataService from "../../../services/UserDataService.js";

export default {
    name: "User",
    data(){
        return {
      firstName: "",
      lastName: "",
      email: "",
      errors: [],
    }},
    computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    refreshUserDetails() {
      UserDataService.get(this.id).then((res) => {
        this.firstName = res.data.firstName;
        this.lastName = res.data.lastName;
        this.email = res.data.email;
      });
    },
    },
  created() {
    this.refreshUserDetails();
  }
}

</script>
