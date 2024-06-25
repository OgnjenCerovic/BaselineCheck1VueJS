<template>
  <div class="cart-page">
    <h1>Your Cart</h1>
    <div v-for="(item, index) in cart" :key="index" class="cart-item">
      <h2>{{ item.product.title }}</h2>
      <p>Quantity: {{ item.quantity }}</p>
      <p>Subtotal: {{ item.product.price * item.quantity }}</p>
    </div>
    <div class="total">
      <h2>Total: {{ total }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    },
  },
};
</script>

<style scoped>
.cart-page {
  text-align: center;
}
.cart-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
.total {
  font-size: 20px;
  font-weight: bold;
}
</style>
