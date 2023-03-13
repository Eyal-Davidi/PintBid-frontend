<template>
  <section>
    <div class="container rounded bg-white mt-5 mb-3">
      <ProfileEditor />
    </div>
    <div class="container rounded mt-5 mb-3">
      <div class="d-flex flex-column align-items-center text-center p-4py-4">
        <h3 class="text-center">Your Product List</h3>
      </div>
    </div>
    <ProductPage />
  </section>
</template>

<script>
import ProfileEditor from "../components/molecules/ProfileEditor.vue";

import ProductPage from "../components/templates/products/ProductPage.vue";
export default {
  name: "ProfileView",
  components: { ProductPage, ProfileEditor },
  data() {
    return {
      selectedFile: null,
    };
  },
};
</script>
<style scoped>
h3 {
  font-weight: bold;
  font-style: normal;
  color: rgb(102, 90, 102);
}
</style>
