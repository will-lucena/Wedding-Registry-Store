<template>
  <StackLayout orientation="horizontal" class="product m-b-10">
    <Image :src="product.image" width="150" class="product-image m-b-10 m-r-10"/>
    <StackLayout orientation="vertical" class="product-info">
      <Label :text="product.name"/>
      <Label :text="product.description"/>
      <Label :text="product.price"/>
      <Label :text="product.availableAmount"/>
      <Button v-if="isAvailable" text="Add to cart" @tap="addToCart"/>
    </StackLayout>
  </StackLayout>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
      this.product.availableAmount--
      console.log(this.product.availableAmount > 0);
    }
  },
  computed: {
    isAvailable() {
      return (
        this.product.availableAmount > 0 &&
        this.user.credits >= this.product.price + this.currentCartPrice
      );
    },
    currentCartPrice() {
      var price = 0;
      this.$store.state.products.forEach(element => {
        price += element.price;
      });
      return price;
    }
  }
};
</script>

<style scope>
/*
.product {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
  margin-bottom: 10px;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}
/**/
</style>