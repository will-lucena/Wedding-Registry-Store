<template>
  <Page class="page">
    <ActionBar :title="title"></ActionBar>
    <FlexboxLayout>
      <StackLayout orientation="vertical">
        <Button :text="cartSize" @tap="goToCart" class="checkout-button m-12"/>
        <ListView :items="products">
          <v-template>
            <Product :user="user" :product="item"></Product>
          </v-template>
        </ListView>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Product from "./Product.vue";
import Cart from "./Cart.vue";
import { Items } from "~/assets/data.js";

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
      baseProducts: Items,
      products: []
    };
  },
  methods: {
    goToCart() {
      this.$showModal(Cart, { props: { user: this.user } }).then(data => {
        this.user = data.user;

        for (var i = 0; i < this.products.length; i++) {
          if (
            typeof data.finalCart.find(
              item => this.products[i].id == item.id
            ) === "undefined"
          ) {
            this.products[i].temporaryAmount = this.products[i].availableAmount;
          } else {
            this.products[i].availableAmount = this.products[i].temporaryAmount;
          }
        }
      });
    }
  },
  computed: {
    cartSize() {
      return "Cart (" + this.$store.state.products.length + ")";
    },
    title() {
      return (
        "Welcome " +
        this.user.name +
        " you have " +
        this.user.credits +
        " credits"
      );
    }
  },
  mounted() {
    this.baseProducts.forEach((item, index) => {
      this.products.push({
        id: index,
        name: item.name,
        image: item.image,
        description: item.description,
        price: item.price,
        availableAmount: item.availableAmount,
        temporaryAmount: item.temporaryAmount
      });
    });
  }
};
</script>

<style scope>
ActionBar {
  background-color: #212121;
  color: #fafafa;
}

.action-item {
  color: #fafafa;
}

.checkout-button {
  background-color: #9ccc65;
  color: #212121;
}
</style>