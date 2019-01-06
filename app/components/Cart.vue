<template>
  <Page class="page">
    <StackLayout orientation="vertical">
      <Button text="Buy" class="checkout-button" @tap="checkout"/>
      <ListView :items="cart">
        <v-template>
          <StackLayout orientation="vertical">
            <StackLayout orientation="horizontal" class="item m-b-10">
              <Image :src="item.image" class="item-image m-b-10 m-r-10"/>
              <StackLayout orientation="vertical" class="item-info">
                <Label :text="item.name" textWrap="true"/>
                <Label :text="productTotalCost(item)" textWrap="true"/>
              </StackLayout>
            </StackLayout>
            <Button text="Remove" class="remove-button" @tap="remove(item)"/>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import Product from "./Product.vue";
import { Items } from "~/assets/data.js";

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
      this.$store.state.products = [];
      let result = { user: this.user, finalCart: this.cart };
      this.$modal.close(result);
    },
    productAmount(product) {
      return this.$store.state.products.filter(item => item.id == product.id)
        .length;
    },
    productTotalCost(product) {
      var quantity = this.productAmount(product);
      return product.price + "x" + quantity + " = " + product.price * quantity;
    },
    remove(product) {
      this.cart = this.cart.filter(item => item.id != product.id);

      this.total = 0;

      this.cart.forEach(item => {
        this.total += item.price * this.productAmount(item);
      });
    }
  },
  computed: {
    userCredits() {
      return "Credits: " + this.user.credits;
    }
  },
  mounted() {
    for (var i = 0; i < Items.length; i++) {
      let list = this.$store.state.products.filter(item => item.id == i);
      if (list.length > 0) {
        this.cart.push(list[0]);
        this.total += list[0].price * list.length;
      }
    }
  }
};
</script>

<style scope>
.item {
  display: flex;
  flex-flow: wrap;
  padding: 4px;
}

.item-image {
  width: 100%;
  height: 200px;
}

.item-image,
.item-info {
  margin-top: 10px;
  width: 50%;
  color: #212121;
}

.checkout-button {
  background-color: #9ccc65;
  color: #212121;
}

.remove-button {
  background-color: #ef5350;
  color: #212121;
}
</style>