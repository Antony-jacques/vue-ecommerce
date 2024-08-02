<script setup lang="ts">
import TheHeader from './components/Header.vue'
import TheFooter from './components/Footer.vue'
import Shop from './components/Shop/Shop.vue'
import Cart from './components/Cart/Cart.vue'
import data from './data/product'
import { reactive } from 'vue'
import type { ProductInterface } from './interfaces/productInterface'

const state = reactive<{
  products: ProductInterface[],
  cart: ProductInterface[],
}>({
  products: data,
  cart: [],
})

function addProductToCart(productId: number): void {
  const product = state.products.find((product) => product.id === productId)
  if (product && !state.cart.find((product) => product.id === productId)) {
    state.cart.push({ ...product }) // create an other product object without Proxy
  }
}

</script>

<template>
  <div class="app-container">
    <TheHeader class="header" />
    <Shop @add-product-to-cart="addProductToCart" :products="state.products" 
    @add-to-wish-list="addToWishList" class="shop" />
    <Cart :cart="state.cart" class="cart" />
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