<script setup lang="ts">
import TheHeader from './components/Header.vue'
import TheFooter from './components/Footer.vue'
import Shop from './components/Shop/Shop.vue'
import Cart from './components/Cart/Cart.vue'
import data from './data/product'
import { reactive } from 'vue'
import type { ProductCartInterface, ProductInterface } from './interfaces'

const state = reactive<{
  products: ProductInterface[]
  cart: ProductCartInterface[]
}>({
  products: data,
  cart: []
})

function addProductToCart(productId: number): void {
  const product = state.products.find((product) => product.id === productId)
  if (product) {
    const productInCart = state.cart.find((product) => product.id === productId)
    console.log(state.cart)
    if (productInCart) {
      productInCart.quantity++
    } else {
      state.cart.push({ ...product, quantity: 1 }) // create an other product object without Proxy
    }
  }
}

function removeProductFromCart(productId: number): void {
  console.log('removeProductFromCart', productId)
  const productFromCart = state.cart.find((product) => product.id === productId)
  if (productFromCart) {
    if (productFromCart.quantity === 1) {
      state.cart = state.cart.filter(product => product.id != productId)
    } else {
      productFromCart.quantity--
    }
  }

  // state.cart = state.cart.filter(product => product.id != productId)
}
</script>

<template>
  <div class="app-container">
    <TheHeader class="header" />
    <Shop
      @add-product-to-cart="addProductToCart"
      :products="state.products"
      @add-to-wish-list="addToWishList"
      class="shop"
    />
    <Cart @remove-product-from-cart="removeProductFromCart" :cart="state.cart" class="cart" />
    <TheFooter class="footer" />
  </div>
</template>

<style lang="scss">
@use './assets/base.scss' as *;
@use './assets/debug.scss' as *;

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header header' 'shop cart' 'footer footer';
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}
.header {
  grid-area: header;
}
.shop {
  grid-area: shop;
}
.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: white;
}
.footer {
  grid-area: footer;
}
</style>
