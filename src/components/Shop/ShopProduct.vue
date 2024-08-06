<template>
  <div class="product d-flex flex-column">
    <div class="product-image" :style="{ 'background-image': `url(${product.image})` }"></div>
    <div class="p-10 d-flex flex-column">
      <h4>{{ product.title }}</h4>
      <p>{{ product.description }}</p>
      <div class="d-flex flex-row align-items-center">
        <strong class="flex-fill">Prix : {{ product.price }}€</strong>
        <button @click="emit('addProductToCart', product.id)" class="btn btn-primary">Ajouter au panier</button>
        <input v-model="isAddedTowishList" type="checkbox">
        <p>{{ isAddedTowishList }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ProductInterface } from '../../interfaces'

const props = defineProps<{
  product: ProductInterface
}>()

const emit = defineEmits<{
  (e: 'addProductToCart', productId: number): void,
  (e: 'addToWishList', wishProduct: { isAddedTowishList: boolean, productId: number }): void
}>()

const isAddedTowishList = ref(false)

watch(isAddedTowishList, (newValue) => {
  emit('addToWishList', { isAddedTowishList: newValue, productId: props.product.id })
})
</script>

<style lang="scss" scoped>
.product {
  background-color: #ffffff;
  border: var(--border);
  border-radius: var(--border-radius);
  &-image {
    border-top-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
    background-size: cover;
    background-position: center;
    height: 250px;
  }
}
</style>
