import axios, { type AxiosInstance } from 'axios'

const ENV: ImportMetaEnv = import.meta.env

const httpService: AxiosInstance = axios.create({
  baseURL: ENV._API,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpService
