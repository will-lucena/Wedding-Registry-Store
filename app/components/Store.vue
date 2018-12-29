<template>
  <FlexboxLayout>
    <Label text:hi/>
  </FlexboxLayout>
</template>

<script>
import Product from "./Product.vue";

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    Product
  },
  data() {
    return {
      cart: []
    };
  },
  methods: {},
  computed: {
    haveMoneyEnought(price) {
      return this.user.credits > price;
    },
    hi() {
      if (this.user) {
        return "Hi " + this.user.name;
      } else {
        return "Fudeu";
      }
    }
  }
};
</script>

<style scope>
</style>