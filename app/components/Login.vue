<template>
  <StackLayout orientation="vertical">
      <TextField v-model="user.name" hint="name"/>
      <TextField v-model="user.email" hint="email" keyboardType="email"/>
      <TextField v-model="user.username" hint="username"/>
      <TextField v-model="user.password" hint="password" secure="true"/>
      <TextField v-model="confirmation" hint="confirm your password" secure="true"/>
      <Button text="Sign up" @tap="signup(user.email, user.password, confirmation)"/>
    </StackLayout>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        username: null,
        password: null,
        credits: 500
      },
      confirmation: null
    };
  },
  methods: {
    signup(email, password, confirmation) {
      this.$emit("signup", this.user);
      this.user.name = null;
      this.user.email = null;
      this.user.username = null;
      this.user.password = null;
      this.confirmation = null;

      /*
      // Transformar numa constante em utils
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

      if (emailRegex.test(String(email).toLowerCase()))
      {
        if (passwordRegex.test(String(password)))
        {
          if (String(password) == String(confirmation))
          {
            this.$emit('signup', this.user)
            name = null
            email = null
            username = null
            password = null
            confirmation = null
          }
          else
          {
            console.log("confirmacao invalida")
          }
        }
        else
        {
          console.log("senha errada")
        }
      }
      else
      {
        console.log("email errado")
      }
      /**/
    }
  }
};
</script>

<style scoped>

</style>
