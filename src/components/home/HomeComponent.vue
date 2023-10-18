<script lang="ts" setup>
import { NavigationComponent } from '@/components'

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: 'Home Component'
  }
})
</script>

<template>
  <div class="home">
    <h1 v-text="text"></h1>
    <NavigationComponent />
  </div>
</template>
