<template>
  <div class="grid p-20">
    <ShopProduct v-for="product in products" :key="product.title" :product="product" />
  </div>
</template>

<script setup lang="ts">
import { ProductInterface } from '../../interfaces/productInterface'
import ShopProduct from './ShopProduct.vue'

defineProps<{
  products: ProductInterface[]
}>()

</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 300px;
  gap: 20px;
}
</style>
