<template>
  <div>
    <ShopProductList @add-product-to-cart="emit('addProductToCart', $event)" :products="products"
    @add-to-wish-list="addToWishList" />
    <div>
      <h2>wishlist</h2>
      <div v-for="wishProduct in state.wishList" :key="wishProduct.title">
        {{ wishProduct.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { ProductInterface } from '../../interfaces'
import ShopProductList from './ShopProductList.vue'

const props = defineProps<{
  products: ProductInterface[]
}>()

const emit = defineEmits<{
  (e: 'addProductToCart', productId: number):void,
}>()

const state = reactive<{
  wishList: ProductInterface[]
}>({
  wishList: []
})

function addToWishList(wishProduct): void {
  console.log(wishProduct)
  const product = props.products.find((product) => product.id === wishProduct.productId)
    if (product && wishProduct.isAddedTowishList && !state.wishList.find((product) => product.id === wishProduct.productId)) {
      state.wishList.push({ ...product }) // create an other product object without Proxy
    } else if(product && !wishProduct.isAddedTowishList && state.wishList.find((product) => product.id === wishProduct.productId)){
      state.wishList = state.wishList.filter(product => product.id !== wishProduct.productId)
    }
    console.log(state.wishList)
}
</script>
<style lang="scss" scoped></style>
