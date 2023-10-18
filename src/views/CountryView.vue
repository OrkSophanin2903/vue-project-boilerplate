<script lang="ts" setup>
import { useCountryStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { nextTick, onMounted } from 'vue'

const countryStore = useCountryStore()

const { country, countryLoading } = storeToRefs(countryStore)

onMounted(async () => {
  await nextTick()
  countryStore.getCountry()
})
</script>

<template>
  <div class="country">
    <h1>This is a country page</h1>

    <div class="country--data" v-if="!countryLoading">
      <code>{{ country }}</code>
    </div>

    <RouterLink :to="{ name: 'home' }" text="Back Home" class="counter--home" />
  </div>
</template>
