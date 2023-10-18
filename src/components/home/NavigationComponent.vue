<script lang="ts" setup>
import { computed } from 'vue'

const navigates = computed((): { name: string; label: string }[] => [
  {
    name: 'counter',
    label: 'Counter '
  },
  {
    name: 'country',
    label: 'Country '
  }
])
</script>

<template>
  <div class="navigation">
    <RouterLink
      v-for="(nav, key) in navigates"
      :key="key"
      :to="nav.name"
      v-html="nav.label"
      class="navigation--item"
    />
  </div>
</template>
