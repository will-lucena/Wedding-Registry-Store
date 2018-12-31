<template>
  <StackLayout orientation="horizontal" class="product m-b-10" >
    <Image :src="product.image" width="150" class="product-image m-b-10 m-r-10"/>
    <StackLayout orientation="vertical" class="product-info">
      <Label :text="product.name"/>
      <Label :text="product.description"/>
      <Label :text="product.price"/>
      <Label :text="isAvailable"/>
      <Button :disabled="!isAvailable" text="Add to cart" @tap="addToCart"/>
    </StackLayout>
  </StackLayout>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product);
    }
  },
  computed: {
    isAvailable() {
      return "Available: " + this.product.currentAmount > 0;
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