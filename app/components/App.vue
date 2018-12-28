<template>
  <Page>
    <ActionBar title="Wedding Registry Store"/>
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" :visibility="labelVisibility" />
      <Login :user="user" @signup="signup" :visibility="loginVisibility"></Login>
    </GridLayout>
  </Page>
</template>

<script>
import Login from "./Login.vue";

export default {
  data() {
    return {
      msg: "",
      user: {
        name: null,
        email: null,
        username: null,
        password: null,
        credits: 1000
      },
      isLoggedin: false
    }
  },
  computed:
  {
    loginVisibility()
    {
      if (this.isLoggedin)
      {
        return "collapse"
      }
      else
      {
        return "visible"
      }
    },
    labelVisibility()
    {
      if (!this.isLoggedin)
      {
        return "collapse"
      }
      else
      {
        return "visible"
      }
    }
  },
  components:
  {
    Login
  },
  methods:
  {
    signup(user)
    {
      this.user = user
      this.isLoggedin = true
      this.msg = "Hello " + this.user.name + " you have " + this.user.credits + " credits left"
    }
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
