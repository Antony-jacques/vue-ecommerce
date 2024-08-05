<script setup lang="ts">
import type { ProductInterface } from '../../interfaces/productInterface';
import CartProductList from './CartProductList.vue';

defineProps<{
  cart: ProductInterface[]
}>()

const emit = defineEmits<{
  (e:'removeProductFromCart', $event)
}>()


</script>

<template>
  <div class="p-20">
    <h2 class="mb-10">Panier</h2>
    <CartProductList @remove-product-from-cart="emit('removeProductFromCart', $event)" :cart="cart"/>
  </div>
</template>

<style lang="scss" scoped></style>