import axios, { InternalAxiosRequestConfig } from 'axios'
import { localStorageObj } from '../utils'

export const api = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = localStorageObj.get('accessToken')
  if (!accessToken) {
    return config
  }
  const authHeader = `Bearer ${accessToken}`
  config.headers.authorization = authHeader
  return config
})
