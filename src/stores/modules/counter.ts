import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)
  const doubleCount = computed((): number => count.value * 2)

  const increment = (): void => {
    count.value++
  }
  const decrement = (): void => {
    count.value--
  }

  return { count, doubleCount, increment, decrement }
})
