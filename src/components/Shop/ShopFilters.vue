<script setup lang="ts">
import { FiltersInterface, FilterUpdate } from '../../interfaces'

const props = defineProps<{
  filters: FiltersInterface;
}>()

const emit = defineEmits<{
  (e: 'updateFilter', updateFilters: FilterUpdate)
}>()
</script>
<template>
  <h2>Rechercher</h2>
  <input
    @input="emit('updateFilter', { search: ($event.target as HTMLInputElement).value })"
    type="text"
  />
</template>

<style></style>
