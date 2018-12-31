<template>
  <Page class="page">
    <ActionBar title="Wedding Registry Store">
      <ActionItem @tap="goToCart" v-show="onStoreScreen" text="Cart" class="action-item"/>
    </ActionBar>
    <FlexboxLayout class="page">
      <Store :user="user" v-if="onStoreScreen" @updateCart="updateCart"></Store>
      <Login :user="user" @signup="signup" v-if="onLoginScreen"></Login>
      <ListView class="list-group" :items="cart" v-if="onCartScreen">
        <v-template>
          <Product :product="item"></Product>
        </v-template>
      </ListView>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Login from "./Login.vue";
import Store from "./Store.vue";
import Product from "./Product.vue"

export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        credits: null
      },
      isLoggedin: false,
      finishShop: false,
      cart: []
    };
  },
  components: {
    Login,
    Store,
    Product
  },
  methods: {
    signup(user) {
      this.user.name = user.name;
      this.user.email = user.email;
      this.user.password = user.password;
      this.user.credits = user.credits;
      this.isLoggedin = true;
    },
    goToCart() {
      console.log("cart");
      this.finishShop = true;
    },
    updateCart(item) {
      this.cart.push(item);
    }
  },
  computed: {
    onLoginScreen() {
      return !this.isLoggedin;
    },
    onStoreScreen() {
      return this.isLoggedin && !this.finishShop;
    },
    onCartScreen() {
      return this.finishShop;
    }
  }
};
</script>

<style scoped>
/*
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.page {
  font-family: tahoma;
  margin: 0px;
}
/**/
</style>
