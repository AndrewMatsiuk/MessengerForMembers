import {
  LOGIN_ROUTE,
  ONBOARD_PROFILE_ROUTE,
  SIGNUP_ROUTE,
  SIGNIN_ROUTE,
  MAIL_OTP_ROUTE,
  RESSET_PASSWORD_ROUTE,
  CHATS_ROUTE,
} from '../../../routes/routes'
import { navigateTo } from '../reducer'

export const toLogin = () => {
  return navigateTo({ to: LOGIN_ROUTE })
}

export const toSignUp = () => {
  return navigateTo({ to: SIGNUP_ROUTE })
}
export const toSignIn = () => {
  return navigateTo({ to: SIGNIN_ROUTE })
}

export const toOnBoard = () => {
  return navigateTo({ to: ONBOARD_PROFILE_ROUTE })
}

export const toMailOtp = () => {
  return navigateTo({ to: MAIL_OTP_ROUTE })
}

export const toResetPassword = () => {
  return navigateTo({ to: RESSET_PASSWORD_ROUTE })
}

export const toChats = () => {
  return navigateTo({ to: CHATS_ROUTE })
}
