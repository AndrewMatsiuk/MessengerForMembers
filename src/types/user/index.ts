export type User = {
  email: string
  id: string
  isOnboard: boolean
  isVerified: boolean
  avatarUrl: string | null
  name: string
  nickName: string
  description: string
  phoneNumber: string
}

export type UserResponseWithoutTokens = User

export type UserResponseWithTokens = User & {
  accessToken: string
  refreshToken: string
}
