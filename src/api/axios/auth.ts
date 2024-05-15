import { UserResponseWithTokens, UserResponseWithoutTokens } from '../../types'
import { api } from '../instance'

export const authApi = {
  async signIn(data: {
    email: string
    password: string
  }): Promise<UserResponseWithTokens | UserResponseWithoutTokens> {
    const response = await api.post('/auth/signIn', data)
    return response.data
  },

  async signUp(data: { email: string; password: string }): Promise<UserResponseWithTokens> {
    const response = await api.post('/auth/signUp', data)
    return response.data
  },

  async otpCode(data: { userId: string; code: number }): Promise<UserResponseWithTokens> {
    const response = await api.post('/code/confirm', data)
    return response.data
  },

  async otpCodeRepeat(data: { userId: string }) {
    const response = await api.post('./code/repeat', data)
    return response.data
  },
  async passwordLink(data: { email: string }): Promise<string> {
    const response = await api.post('/auth/passwordLink', data)
    return response.data
  },
  async resetPassword(data: { password: string; userId: string }): Promise<UserResponseWithoutTokens> {
    const response = await api.post('/auth/resetPassword', data)
    return response.data
  },
}


