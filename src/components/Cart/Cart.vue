<script setup lang="ts">
import { computed } from 'vue'
import type { ProductCartInterface } from '../../interfaces'
import CartProductList from './CartProductList.vue'

const props = defineProps<{
  cart: ProductCartInterface[]
}>()

const emit = defineEmits<{
  (e: 'removeProductFromCart', $event)
}>()

const totalPrice = computed(() =>
  props.cart.reduce((totalPrice, product) => {
    return  totalPrice + product.price * product.quantity
  }, 0)
)
</script>

<template>
  <div class="p-20 d-flex flex-column">
    <h2 class="mb-10">Panier</h2>
    <CartProductList
      class="flex-fill"
      @remove-product-from-cart="emit('removeProductFromCart', $event)"
      :cart="cart"
    />
    <button class="btn btn-success">Commander {{ totalPrice }} €</button>
  </div>
</template>

<style lang="scss" scoped></style>
