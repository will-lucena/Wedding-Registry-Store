import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  products: [],
  productsInStore: 3
};

const mutations = {
  addToCart(state, product) {
    state.products.push(product)
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

Vue.prototype.$store = store;
export default store;