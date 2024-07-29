<template>
  <div>
    <ShopProductList :products="products" />
  </div>
</template>

<script setup lang="ts">
import { ProductInterface } from '../../interfaces/productInterface'
import ShopProductList from './ShopProductList.vue'

defineProps<{
  products: ProductInterface[]
}>()
</script>
<style lang="scss" scoped></style>
