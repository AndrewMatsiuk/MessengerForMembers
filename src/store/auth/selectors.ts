import { AuthState } from '../../types'

export const selectAccessToken = ({ auth }: { auth: AuthState }) => auth.accessToken
export const selectRefreshToken = ({ auth }: { auth: AuthState }) => auth.refreshToken
export const selectAuthIsLoading = ({ auth }: { auth: AuthState }) => auth.isLoading
export const selectSignInState = ({ auth }: { auth: AuthState }) => auth.signInState
export const selectSignUpState = ({ auth }: { auth: AuthState }) => auth.signUpState
export const selectOtpCodeState = ({ auth }: { auth: AuthState }) => auth.otpCodeState
export const selectIsError = ({ auth }: { auth: AuthState }) => auth.isError
