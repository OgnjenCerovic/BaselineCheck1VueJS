<template>
    <div class="product-card">
      <div class="image-gallery">
        <img :src="selectedImage" alt="Product image" class="large-image" />
        <div class="thumbnails">
          <img 
            v-for="(image, index) in product.images" 
            :key="index" 
            :src="image" 
            @click="selectImage(image)"
            class="thumbnail"
          />
        </div>
      </div>
      <div class="product-details">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <div class="price">
          <span>${{ product.price }}</span>
          <span>${{ product.originalPrice }}</span>
        </div>
        <div class="quantity">
          <button @click="decreaseQuantity">-</button>
          <span>{{ quantity }}</span>
          <button @click="increaseQuantity">+</button>
        </div>
        <button @click="addToCart">Add to cart</button>
      </div>
      <div class="cart-icon" @click="goToCart">
        <span v-if="cart.length > 0" class="cart-notification">•</span>
        <img src="cart-icon.png" alt="Cart icon" />
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
    data() {
      return {
        product: {
          title: 'Fall Limited Edition Sneakers',
          description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
          price: 125.00,
          originalPrice: 250.00,
          images: [
            require('@/assets/Shoe 1.jpg'),
            require('@/assets/Shoe 2.jpg'),
            require('@/assets/Shoe 3.jpg'),
            require('@/assets/Shoe 4.jpg'),
          ],
        },
        selectedImage: require('@/assets/Shoe 1.jpg'),
        quantity: 1,
      };
    },
    methods: {
      selectImage(image) {
        this.selectedImage = image;
      },
      increaseQuantity() {
        this.quantity++;
      },
      decreaseQuantity() {
        if (this.quantity > 1) {
          this.quantity--;
        }
      },
      addToCart() {
        const newCart = [...this.cart, {
          product: this.product,
          quantity: this.quantity,
        }];
        this.$emit('update-cart', newCart);
        alert('Product added to cart');
      },
      goToCart() {
        this.$router.push('/cart');
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .large-image {
    width: 300px;
    height: 300px;
  }
  .thumbnails {
    display: flex;
  }
  .thumbnail {
    width: 50px;
    height: 50px;
    margin: 5px;
    cursor: pointer;
  }
  .product-details {
    text-align: center;
  }
  .price {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
  .price span {
    margin: 0 10px;
  }
  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart-icon {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  .cart-notification {
    color: red;
    font-size: 20px;
    position: absolute;
    top: -10px;
    right: -10px;
  }
  </style>
  