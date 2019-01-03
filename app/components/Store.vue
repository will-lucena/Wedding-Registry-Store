<template>
  <Page class="page">
    <ActionBar :title="title"></ActionBar>
    <FlexboxLayout>
      <StackLayout orientation="vertical">
        <Button :text="cartSize" @tap="goToCart" class="checkout-button m-12"/>
        <ListView :items="products">
          <v-template>
            <Product :user="user" :product="item"></Product>
          </v-template>
        </ListView>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
import Product from "./Product.vue";
import Cart from "./Cart.vue";

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
      products: [
        {
          id: 0,
          name: "Bottle labels Jack Daniel",
          image: "~/assets/images/Bottle-labels-jackdaniels.jpg",
          description: "For wedding gift",
          price: 14,
          availableAmount: 5,
          temporaryAmount: 5
        },
        {
          id: 1,
          name: "Punisher silver cunfflinks",
          image: "~/assets/images/Punisher-silver-cufflinks.gif",
          description: "For him",
          price: 150,
          availableAmount: 10,
          temporaryAmount: 10
        },
        {
          id: 2,
          name: "Star wars silver cunfflinks 2",
          image: "~/assets/images/Star-wars-silver-cufflinks.jpg",
          description: "For him",
          price: 150,
          availableAmount: 10,
          temporaryAmount: 10
        },
        {
          id: 3,
          name: "Wedding tissues",
          image: "~/assets/images/Tissues.jpg",
          description: "For her",
          price: 30,
          availableAmount: 7,
          temporaryAmount: 7
        },
        {
          id: 4,
          name: "Mr and ms mug sets",
          image: "~/assets/images/Mr-and-ms-mug-sets.jpg",
          description: "For reception, honeymoon gift or wedding gift",
          price: 120,
          availableAmount: 2,
          temporaryAmount: 2
        },
        {
          id: 5,
          name: "Silhouette cake topper bowing groom",
          image: "~/assets/images/Silhouette-cake-topper-bowing-groom.jpg",
          description: "For reception",
          price: 65,
          availableAmount: 1,
          temporaryAmount: 1
        }
      ]
    };
  },
  methods: {
    goToCart() {
      this.$showModal(Cart, { props: { user: this.user } }).then(data => {
        this.user = data.user;

        for (var i = 0; i < this.products.length; i++) {
          if (
            typeof data.finalCart.find(
              item => this.products[i].id == item.id
            ) === "undefined"
          ) {
            this.products[i].temporaryAmount = this.products[i].availableAmount;
          } else {
            this.products[i].availableAmount = this.products[i].temporaryAmount;
          }
        }
      });
    }
  },
  computed: {
    cartSize() {
      return "Cart (" + this.$store.state.products.length + ")";
    },
    title() {
      return (
        "Welcome " +
        this.user.name +
        " you have " +
        this.user.credits +
        " credits"
      );
    }
  }
};
</script>

<style scope>
ActionBar {
  background-color: #212121;
  color: #fafafa;
}

.action-item {
  color: #fafafa;
}

.checkout-button {
  background-color: #9ccc65;
  color: #212121;
}
</style>