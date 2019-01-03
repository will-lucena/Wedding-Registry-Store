<template>
  <Page class="page">
    <ActionBar title="Wedding Registry Store"/>
    <FlexboxLayout>
      <ScrollView orientation="vertical">
        <StackLayout class="form">
          <Image class="logo m-b-12" src="~/assets/images/Wedding-icon.png"/>
          <Label
            class="header h1 text-center font-weight-bold m-x-auto m-y-auto"
            text="Wedding Registry Store"
          />

          <StackLayout class="input-field m-b-12">
            <TextField
              v-model="user.name"
              hint="Name..."
              :class="!isValid('name')? 'input m-b-4' : 'input-error m-b-4'"
            ></TextField>
            <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

          <StackLayout class="input-field m-b-12">
            <TextField
              v-model="user.email"
              hint="Email..."
              keyboardType="email"
              :class="!isValid('email')? 'input m-b-4' : 'input-error m-b-4'"
            ></TextField>
            <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

          <StackLayout class="input-field m-b-12">
            <TextField
              v-model="user.password"
              hint="Password..."
              secure="true"
              :class="!isValid('password')? 'input m-b-4' : 'input-error m-b-4'"
            ></TextField>
            <StackLayout class="hr-light"></StackLayout>
          </StackLayout>

          <Button
            text="Sign up"
            class="btn btn-rounded-sm"
            @tap="signup(user.email, user.password)"
          />
        </StackLayout>
      </ScrollView>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Store from "./Store.vue";

export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
        credits: 1000
      },
      errors: []
    };
  },
  methods: {
    signup(email, password) {
      let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
      this.errors = [];

      if (!emailRegex.test(String(email).toLowerCase())) {
        this.errors.push("email");
      }

      if (!passwordRegex.test(String(password))) {
        this.errors.push("password");
      }

      if (this.user.name == null || this.user.name.length == 0) {
        this.errors.push("name");
      }

      if (this.errors.length == 0) {
        this.$navigateTo(Store, { props: { user: this.user } });
      } else {
        alert({
          title: "Invalid fields",
          message: this.buildErrorMessage(),
          okButtonText: "Ok"
        }).then(() => {
          console.log("Errors message was show");
        });
      }
    },
    isValid(field) {
      return this.errors.includes(field);
    },
    buildErrorMessage() {
      var msg = "";
      if (this.errors.includes("name")) {
        msg += "Input your name\n";
      }
      if (this.errors.includes("email")) {
        msg += "Input an email with the mail@mail.com format\n";
      }
      if (this.errors.includes("password")) {
        msg +=
          "Input some password with six or more characters with at least one letter and at least one number\n";
      }
      return msg;
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #212121;
  color: #fafafa;
}

.input {
  font-size: 18;
  color: #fafafa;
  placeholder-color: #fafafa;
}

.input-error {
  color: #ef5350;
  border-color: #ef5350;
  border-width: 3px;
}

.logo {
  width: 500px;
  height: 300px;
}

.btn {
  background-color: #616161;
  color: #fafafa;
}

.header {
  horizontal-align: center;
  font-size: 25;
  font-weight: 600;
  text-align: center;
  color: #bdbdbd;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}
</style>