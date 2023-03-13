<template>
  <section>
    <NavigationItem />
    <div clas="container-fluid">
      <div class="inner">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import NavigationItem from "./components/molecules/NavigationItem.vue";

export default {
  name: "App",
  components: {
    NavigationItem,
  },
};
</script>

<style>
button {
  background-color: rgb(74, 85, 202) !important;
  border-color: rgb(81, 70, 177) !important;
  color: white !important;
}

h3 {
  font-weight: bold;
  font-style: normal;
  color: rgb(102, 90, 102);
}
</style>
