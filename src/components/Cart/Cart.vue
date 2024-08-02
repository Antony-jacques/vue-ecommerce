<script setup lang="ts">
import type { ProductInterface } from '../../interfaces/productInterface';
import CartProductList from './CartProductList.vue';

defineProps<{
  cart: ProductInterface[]
}>()

</script>

<template>
  <div class="p-20">
    <h2 class="mb-10">Panier</h2>
    <CartProductList :cart="cart"/>
  </div>
</template>

<style lang="scss" scoped></style>