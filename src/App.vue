<template>
  <div id="app">
    <router-view :cart="cart" @update-cart="updateCart"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    updateCart(newCart) {
      this.cart = newCart;
    },
  },
};
</script>