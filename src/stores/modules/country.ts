import { getCountryApi } from '@/api/country'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountryStore = defineStore('country', () => {
  const country = ref()
  const countryLoading = ref<boolean>(false)

  const getCountry = (name: string = 'cambodia') => {
    countryLoading.value = true
    getCountryApi(name)
      .then((response: { data: any }): void => {
        country.value = response.data
      })
      .catch((error): never => {
        throw error
      })
      .finally((): void => {
        countryLoading.value = false
      })
  }

  return { country, countryLoading, getCountry }
})
