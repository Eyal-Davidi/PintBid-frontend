<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <ProductCard
        v-for="product in products"
        v-bind:key="product.title"
        v-bind:product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "../../atoms/ProductCard.vue";

export default {
  name: "ProductList",
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          title: "Blaufränkisch BIO 2018 ",
          producer: "Weingut Heinrich",
          description:
            "Rich black fruit is contrasted by peppery flavors and boisterous acidity in this food-friendly Austrian red. Blaufränkisch is a parent grape of both Gamay and Zweigelt.",
          price: "11.90 € ",
          ABV: "12,0%",
          category: "wine",
          status: "Product is avalaible",
          src: require("../../../assets/pics/wine.jpg"),
        },
        {
          title: "Edelweiss RED BERRIES",
          producer: "Judith Beck",
          description:
            "Born and raised in the Alps, Edelweiss Wheat is an invitation to experience the pure and rich taste of alpine nature. The delicate flavours of red berries adds a unique, refreshing & fruity after taste to your perfectly smooth wheat beer",
          price: "8.00 € ",
          ABV: "5,0%",
          category: "beer",
          status: "Product is sold out",
          src: require("../../../assets/pics/beer.jpg"),
        },
        {
          title: "Natura Neuburger 2020",
          producer: "Joiseph Natur Weingut",
          description:
            "Rich black fruit is contrasted by peppery flavors and boisterous acidity in this food-friendly Austrian red. Blaufränkisch is a parent grape of both Gamay and Zweigelt.",
          price: "14.90 € ",
          ABV: "11,0%",
          category: "wine",
          status: "Product is sold out",
          src: require("../../../assets/pics/wine.jpg"),
        },
        {
          title: "Natura Neuburger 2022",
          producer: "Joiseph Natur Weingut",
          description:
            "Rich black fruit is contrasted by peppery flavors and boisterous acidity in this food-friendly Austrian red. Blaufränkisch is a parent grape of both Gamay and Zweigelt.",
          price: "15.90 € ",
          ABV: "10,0%",
          category: "wine",
          status: "Product is avalaible",
          src: require("../../../assets/pics/wine.jpg"),
        },
        {
          title: "Vienna Lager",
          producer: "Von Trapps",
          description:
            "A traditional Vienna Lager is brewed using a three step decoction boiling process.Its color reliably falls between pale amber and medium amber—there should be a reddish hue to examples of this style.",
          price: "9.90 € ",
          ABV: "4,5,0%",
          category: "beer",
          status: "Product is sold out",
          src: require("../../../assets/pics/beer.jpg"),
        },
        {
          title: "pFriem Vienna Lager",
          producer: "pFriem",
          description:
            "pFriem’s copper-colored Vienna Lager is a malty symphony, with aromas of toasted bread and fresh toffee, accompanied by full notes of caramel, nuts and a crisp finish with a touch of malted sweetness. ",
          price: "7.00 € ",
          ABV: "5,0%",
          category: "beer",
          status: "Product is avalaible",
          src: require("../../../assets/pics/beer.jpg"),
        },
      ],
    };
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "montseratt", sans-serif;
  padding-top: 15px;
}
main {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  margin: 0 auto;
}
</style>
