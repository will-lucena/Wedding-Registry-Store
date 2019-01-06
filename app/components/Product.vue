<template>
  <StackLayout orientation="horizontal" class="product m-b-10">
    <Image :src="product.image" class="product-image m-b-10 m-r-10"/>
    <StackLayout orientation="vertical" class="product-info">
      <Label :text="product.name" textWrap="true"/>
      <Label :text="product.description" textWrap="true"/>
      <Label :text="price" textWrap="true"/>
      <Label :text="quantityAvailable" textWrap="true"/>
      <Button v-if="isAvailable" text="Add to cart" class="button m-12" @tap="addToCart"/>
    </StackLayout>
  </StackLayout>
</template>

<script>

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
      this.product.temporaryAmount--;
    }
  },
  computed: {
    isAvailable() {
      return (
        this.product.temporaryAmount > 0 &&
        this.user.credits >= this.product.price + this.currentCartPrice
      );
    },
    currentCartPrice() {
      var price = 0;
      this.$store.state.products.forEach(element => {
        price += element.price;
      });
      return price;
    },
    price() {
      return "Price: " + this.product.price;
    },
    quantityAvailable() {
      return "Quantity available: " + this.product.temporaryAmount;
    }
  }
};
</script>

<style scope>
.product {
  display: flex;
  flex-flow: wrap;
  padding: 4px;
}

.product-image {
  width: 100%;
  height: 200px;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
  color: #fafafa;
}

.button {
  background-color: #616161;
  color: #fafafa;
}
</style>