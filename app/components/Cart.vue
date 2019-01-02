<template>
  <StackLayout orientation="vertical">
    <Label :text="userCredits"/>
    <ListView :items="cart">
      <v-template>
        <StackLayout orientation="horizontal" class="product m-b-10">
          <Image :src="item.image" width="150" class="product-image m-b-10 m-r-10"/>
          <StackLayout orientation="vertical" class="product-info">
            <Label :text="item.name"/>
            <Label :text="item.description"/>
            <Label :text="item.price"/>
            <Label :text="productAmount(item)"/>
          </StackLayout>
        </StackLayout>
      </v-template>
    </ListView>
    <Button text="Checkout" @tap="checkout"/>
  </StackLayout>
</template>

<script>
import Product from "./Product.vue";
import { mapGetters } from "vuex";

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cart: [],
      total: 0
    };
  },
  methods: {
    checkout() {
      this.user.credits -= this.total;
      console.log(this.user.credits)
    },
    productAmount(product) {
      return this.$store.state.products.filter(item => item.id == product.id)
        .length;
    }
  },
  computed: {
    userCredits() {
      return "Credits: " + this.user.credits;
    },
    getProducts() {
      return this.$store.state.products;
    }
  },
  mounted()
  {
    for(var i = 0; i < this.$store.state.productsInStore; i++)
    {
      let list = this.$store.state.products.filter(item => item.id == i)
      if (list.length > 0)
      {
        this.cart.push(list[0])
        this.total += (list[0].price * list.length)
      }
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