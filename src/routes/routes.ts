export const CHATS_ROUTE = '/'
export const LOGIN_ROUTE = '/signIn'
export const ONBOARD_PROFILE_ROUTE = '/onBoard'
export const SIGNUP_ROUTE = '/signUp'
export const SIGNIN_ROUTE = '/signIn'
export const RESSET_PASSWORD_ROUTE = '/resetPassword'
export const SET_NEW_PASSWORD_ROUTE = '/setNewPassword'
export const MAIL_OTP_ROUTE = '/mailOtp'

export const publicPaths = [
  LOGIN_ROUTE,
  MAIL_OTP_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  RESSET_PASSWORD_ROUTE,
  SET_NEW_PASSWORD_ROUTE,
].map((route) => route.toLowerCase())
