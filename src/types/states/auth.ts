import { ResetPassword } from './../../pages/ResetPassword/index';
export type SignInState = {
  email: string
  password: string
}

export type SignUpState = {
  email: string
  password: string
  repeatPassword: string
}
export type OtpCodeState = {
  userId: string
  otpCode: number
}


export type ResetPasswordState = {
  email: string;
}
export type AuthState = {
  isError:boolean
  signInState: SignInState
  signUpState: SignUpState
  resetPasswordState: ResetPasswordState
  accessToken: string
  refreshToken: string
  isLoading: boolean
  otpCodeState: OtpCodeState
}


