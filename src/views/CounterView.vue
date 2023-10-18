<script lang="ts" setup>
import { useCounterStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const counterStore = useCounterStore()

const { count, doubleCount } = storeToRefs(counterStore)

const disabled = computed((): boolean => !count.value)
</script>

<template>
  <div class="counter">
    <h1>This is a counter page</h1>
    <div>Counter: {{ count }}</div>
    <div>Double: {{ doubleCount }}</div>
    <div class="counter--action">
      <button @click="counterStore.increment">Increment</button>
      <button @click="counterStore.decrement" :disabled="disabled">Decrement</button>
    </div>
    <RouterLink :to="{ name: 'home' }" text="Back Home" class="counter--home" />
  </div>
</template>
