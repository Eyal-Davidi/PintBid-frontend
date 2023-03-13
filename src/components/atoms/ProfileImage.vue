<template>
  <section>
    <div class="col-md-12">
      <div class="d-flex flex-column align-items-center text-center mt-5">
        <img
          id="profile-img"
          src="../../assets/pics/user_boy.jpg"
          class="profile-img-card"
        />
        <div class="container rounded align-items-center mt-3 mb-3">
          <input
            class="col-md-5 mt-1"
            type="file"
            on:change="onFileSelected"
            ref="fileInput"
          />
        </div>
        <button
          class="btn btn-primary profile-button mt-3 mb-3"
          type="button"
          on:click="$refs.fileInput"
        >
          Upload
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ProfileImage",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>
<style scoped>
.profile-img-card {
  width: 350px;
  height: 350px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
