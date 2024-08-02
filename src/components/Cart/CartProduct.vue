<script setup lang="ts">
import { ProductInterface } from "../../interfaces/productInterface";

defineProps<{
  product: ProductInterface
}>()

</script>

<template>
  <div class="mb-10 p-10 d-flex flex-row align-items-center product">
    <strong class="flex-fill mr-10">{{ product.title }}</strong>
    <span class="mr-10">Prix : {{ product.price }}€</span>
    <button class="btn btn-danger">Supprimer</button>
  </div>
</template>

<style lang="scss" scoped>
.product {
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--gray-1);
}
</style>