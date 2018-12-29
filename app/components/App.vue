<template>
  <Page>
    <ActionBar title="Wedding Registry Store"/>
    <FlexboxLayout>
      <Store :user="user" v-show="isLoggedin"/>
      <Login :user="user" @signup="signup" v-show="!isLoggedin"></Login>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Login from "./Login.vue";
import Store from "./Store.vue";

export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        credits: null
      },
      isLoggedin: false
    };
  },
  computed: {
    loginVisibility() {
      if (this.isLoggedin) {
        return "collapse";
      } else {
        return "visible";
      }
    },
    labelVisibility() {
      if (!this.isLoggedin) {
        return "collapse";
      } else {
        return "visible";
      }
    }
  },
  components: {
    Login,
    Store
  },
  methods: {
    signup(user) {
      this.user = user;
      this.isLoggedin = true;
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
</style>
