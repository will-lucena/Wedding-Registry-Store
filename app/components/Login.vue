<template>
  <FlexboxLayout class="page">
    <ScrollView orientation="vertical">
      <StackLayout class="form">
        <Image class="logo m-b-12" height="80" src="~/assets/images/NativeScript-Vue.png"/>
        <Label
          class="header h1 text-center font-weight-bold m-x-auto text-primary"
          text="Wedding Registry Store"
        />

        <StackLayout class="input-field">
          <TextField v-model="user.name" hint="name" class="input"></TextField>
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>

        <StackLayout class="input-field">
          <TextField v-model="user.email" hint="email" keyboardType="email" class="input"></TextField>
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>

        <StackLayout class="input-field">
          <TextField v-model="user.password" hint="password" secure="true" class="input"></TextField>
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>

        <Button
          text="Sign up"
          class="btn btn-primary btn-rounded-sm"
          @tap="signup(user.email, user.password)"
        />
      </StackLayout>
    </ScrollView>
  </FlexboxLayout>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        credits: 1000
      }
    };
  },
  methods: {
    signup(email, password) {
      this.$emit("signup", this.user);
      this.user.name = null;
      this.user.email = null;
      this.user.password = null;

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
/*
.page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}

.logo {
  margin-bottom: 12;
  height: 90;
  font-weight: bold;
}

.header {
  horizontal-align: center;
  font-size: 25;
  font-weight: 600;
  margin-bottom: 70;
  text-align: center;
  color: #d51a1a;
}

.input-field {
  margin-bottom: 25;
}

.input {
  font-size: 18;
  color: #a8a8a8;
}

.btn-primary {
  margin: 30 5 15 5;
}

.login-label {
  horizontal-align: center;
  color: #a8a8a8;
  font-size: 16;
}

.sign-up-label {
  margin-bottom: 20;
}

.bold {
  color: #000000;
}
/**/
</style>