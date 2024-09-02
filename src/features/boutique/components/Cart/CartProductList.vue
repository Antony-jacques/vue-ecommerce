<script setup lang="ts">
import { ProductCartInterface } from '../../interfaces'
import CartProduct from './CartProduct.vue'

const props = defineProps<{
  cart: ProductCartInterface[]
}>()

const emit = defineEmits<{
  (e:'removeProductFromCart', $event)
}>()
</script>

<template>
  <div class="d-flex flex-column">
    <CartProduct @remove-product-from-cart="emit('removeProductFromCart', $event)" v-for="product in cart" :key="product.title" :product="product" />
  </div>
</template>

<style lang="scss" scoped></style>
