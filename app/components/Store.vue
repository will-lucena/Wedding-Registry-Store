<template>
  <StackLayout orientation="vertical">
    <Label :text="cartSize" class="cart"/>
    <ListView :items="products">
      <v-template>
        <Product :user="user" :product="item"></Product>
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
      products: [
        {
          id: 0,
          name: "p1",
          image: "~/assets/images/NativeScript-Vue.png",
          description: "item desc",
          price: 50,
          availableAmount: 5
        },
        {
          id: 1,
          name: "p2",
          image: "~/assets/images/NativeScript-Vue.png",
          description: "item2 desc",
          price: 500,
          availableAmount: 2
        },
        {
          id: 2,
          name: "p3",
          image: "~/assets/images/NativeScript-Vue.png",
          description: "item3 desc",
          price: 2000,
          availableAmount: 1
        }
      ]
    };
  },
  methods: {},
  computed: {
    cartSize() {
      return "Cart (" + this.$store.state.products.length + ")";
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