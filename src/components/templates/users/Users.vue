<template>
  <div class="container">
    <h3 class="mt-5 mb-5 float-left text-primary">User Table</h3>
    <table class="table table-striped">
      <thead>
        <tr class="columns">
          <th scope="col">#</th>
          <th scope="col" class="column">First Name</th>
          <th scope="col" class="column">Last Name</th>
          <th scope="col" class="column">Email</th>
          <th scope="col" class="column">Role</th>
          <th scope="col" class="column">Status</th>
          <th scope="col" class="column">Unblock</th>
          <th scope="col" class="column">Block</th>
          <th scope="col" class="column">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="m-5"
          v-for="(user, index) in users"
          :key="index"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.roles }}</td>
          <td>{{ user.isBlocked ? "Blocked" : "Unblocked" }}</td>

          <td>
            <button
              class="badge badge-primary"
              @click="updateBlocked(user,false)"
            >
              UnBlock
            </button>
          </td>

          <td>
            <button
              class="badge badge-primary"
              @click="updateBlocked(user,true)"
            >
              Blocked
            </button>
          </td>

          <td>
            <button class="badge badge-primary " v-on:click="deleteUser(user.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserDataService from "../../../services/UserDataService";

export default {
  name: "records",
  data() {
    return {
      users: [],
      showModal: false,
    };
  },
  mounted() {
    this.retrieveUsers();
  },
  methods: {
    retrieveUsers() {
      UserDataService.getAll()
        .then((response) => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteUser(id) {
      UserDataService.delete(id)
        .then((response) => {
          this.message = "The user was delete successfully!";
          console.log(response.data);
          this.$router.push({ name: "admin" });
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateBlocked(user, status) {
      user.isBlocked = status;

      
      UserDataService.update(user.id, user)
        .then((response) => {
          console.log(response.data);
         // this.user.isBlocked = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.table {
  width: 700;
}
</style>
