<template>
  <Page class="page">
    <ActionBar title="Wedding Registry Store">
      <ActionItem @tap="goToCart" v-show="onStoreScreen" text="Cart" class="action-item"/>
    </ActionBar>
    <FlexboxLayout class="page">
      <Store :user="user" v-if="onStoreScreen"></Store>
      <Login :user="user" v-if="onLoginScreen" @signup="signup"></Login>
      <Cart :user="user" v-if="onCartScreen"></Cart>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Login from "./Login.vue";
import Store from "./Store.vue";
import Product from "./Product.vue";
import Cart from "./Cart.vue";

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
      finishShop: false
    };
  },
  components: {
    Login,
    Store,
    Product,
    Cart
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
      this.finishShop = true;
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
