<script setup lang="ts">
import { ProductInterface } from '../../interfaces/productInterface'
import CartProduct from './CartProduct.vue'

const props = defineProps<{
  cart: ProductInterface[]
}>()
</script>

<template>
  <div class="d-flex flex-column">
    <CartProduct v-for="product in cart" :key="product.title" :product="product" />
  </div>
</template>

<style lang="scss" scoped></style>
