<template>
  <div class="grid p-20">
    <ShopProduct v-for="product in products" :key="product.title" :product="product"
    @add-product-to-cart="emit('addProductToCart', $event)"
    @add-to-wish-list=" emit('addToWishList', $event)"/>
  </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from '../../interfaces'
import ShopProduct from './ShopProduct.vue'

defineProps<{
  products: ProductInterface[]
}>()

const emit = defineEmits<{
  (e: 'addProductToCart', productId: number):void
  (e: 'addToWishList', wishProduct: object):void
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
