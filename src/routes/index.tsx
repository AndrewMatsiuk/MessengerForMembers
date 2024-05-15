import { Route, Routes } from 'react-router-dom'
import {
  LOGIN_ROUTE,
  ONBOARD_PROFILE_ROUTE,
  MAIL_OTP_ROUTE,
  SIGNUP_ROUTE,
  RESSET_PASSWORD_ROUTE,
  SET_NEW_PASSWORD_ROUTE,
  CHATS_ROUTE,
} from './routes'
import {
  SignInPage,
  OnboardingPage,
  SignUpPage,
  OtpPage,
  ResetPassword,
  SetNewPassword,
  Chats,
} from '../pages'

export const NavigationContainer = () => {
  return (
    <>
      <Routes>
        <Route path={CHATS_ROUTE} element={<Chats />} />
        <Route path={LOGIN_ROUTE} element={<SignInPage />} />
        <Route path={ONBOARD_PROFILE_ROUTE} element={<OnboardingPage />} />
        <Route path={SIGNUP_ROUTE} element={<SignUpPage />} />
        <Route path={RESSET_PASSWORD_ROUTE} element={<ResetPassword />} />
        <Route path={SET_NEW_PASSWORD_ROUTE} element={<SetNewPassword />} />
        <Route path={MAIL_OTP_ROUTE} element={<OtpPage />} />
      </Routes>
    </>
  )
}
