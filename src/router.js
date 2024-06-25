import { createRouter, createWebHistory } from 'vue-router';
import ProductCard from './components/ProductCard.vue';
import ShoppingCart from './components/ShoppingCart.vue';

const routes = [
  {
    path: '/',
    name: 'ProductCard',
    component: ProductCard,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
