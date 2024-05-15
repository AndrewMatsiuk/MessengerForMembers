import { User } from '../../types'
import { api } from '../instance'

export const userApi = {
  getUser: async (): Promise<User> => {
    const response = await api.get('/user')
    return response.data
  },
  onBoarding: async (data: User): Promise<User> => {
    const response = await api.post('/user/onBoarding', data)
    return response.data
  },
}
