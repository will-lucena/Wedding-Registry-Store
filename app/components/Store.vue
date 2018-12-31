<template>
  <StackLayout orientation="vertical">
    <Label :text="cartSize" class="cart"/>
    <ListView :items="products">
      <v-template>
        <Product :product="item" @addToCart="addToCart"></Product>
      </v-template>
    </ListView>
  </StackLayout>
</template>

<script>
import Product from "./Product.vue";

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    Product
  },
  data() {
    return {
      cart: [],
      products: [
        {
          name: "p1",
          image: "~/assets/images/NativeScript-Vue.png",
          description: "item desc",
          price: 50,
          currentAmount: 5
        },
        {
          name: "p2",
          image: "~/assets/images/NativeScript-Vue.png",
          description: "item2 desc",
          price: 500,
          currentAmount: 2
        }
      ]
    }
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
      this.$emit("updateCart", item)
    }
  },
  computed: {
    cartSize() {
      return "Cart(" + this.cart.length + ")";
    }
  }
};
</script>

<style scope>
/*
 .cart {
    margin-right: 25px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 5px 20px;
}
/**/
</style>