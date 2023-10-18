import http from '@/services/http-service'

export const getCountryApi = (name: string) => {
  return http.get(`/name/${name}`)
}
