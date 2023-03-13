<template>
  <div class="col-6">
    <div class="product">
      <div v-bind:class="'product-inner' + product.category">
        <div class="product-text-wrap">
          <h2 class="category">{{ product.category }}</h2>
        </div>
        <div class="product-image-wrap">
          <img v-bind:src="product.src" class="product-image" />
        </div>

        <div class="product-detail">
          <h4>{{ product.title }}</h4>
          <p>{{ product.description }}</p>
          <p>Producer: {{ product.producer }} ABV: {{ product.ABV }}</p>
          <p class="price">Price: {{ product.price }}</p>
          <p class="status">
            {{ product.status }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComponent",
  props: ["product"],
};
</script>
<style scoped>
.product {
  flex: 1 1 33.333%;
  width: 100%;
  padding: 25px;
}

.product-inner {
  position: relative;
  padding: 25px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}

img {
  max-height: 350px;
}
.product-text-wrap h2 {
  color: #313131;
  font-size: 100px;
  font-weight: 900;
  opacity: 0.2;
  transform-origin: center;
}
.product-image-wrap {
  position: relative;
  z-index: 1;
  transform-origin: center;
}

.product-detail {
  background-color: #fff;
  padding: 25px;
  margin: 0px 0px 0px;
}
.product-detail h2 {
  font-size: 24px;
  font-weight: 700;
  color: #676767;
  margin-bottom: 15px;
}
.product-detail p {
  font-size: 14px;
  line-height: 1.5;
  font-weight: 300;
  color: #676767;
}
.product-detail .price {
  font-weight: bold;
  font-style: normal;
  color: rgb(43, 6, 81);
}

.status {
  font-weight: bold;
  font-style: normal;
  color: rgb(102, 90, 102);
}
</style>
