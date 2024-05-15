import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '..'
import { authApi } from '../../api'
import {
  AuthState,
  OtpCodeState,
  RootState,
  ResetPasswordState,
  SignInState,
  SignUpState,
  UserResponseWithoutTokens,
  UserResponseWithTokens,
} from '../../types'
import { localStorageObj } from '../../utils'
import { toChats, toMailOtp, toOnBoard } from '../navigation/redirects'
import { userActions } from '../user/reducer'

const initialState: AuthState = {
  isError: false,
  signInState: {
    email: '',
    password: '',
  },
  signUpState: {
    email: '',
    password: '',
    repeatPassword: '',
  },
  otpCodeState: {
    userId: '',
    otpCode: 0,
  },
  resetPasswordState: {
    email: '',
  },
  accessToken: '',
  refreshToken: '',
  isLoading: false,
}

const login = createAsyncThunk(
  'auth/login',
  async (payload: { email: string; password: string }, { dispatch }) => {
    try {
      dispatch(authActions.setIsLoading(true))
      const user = await authApi.signIn({ email: payload?.email, password: payload?.password })
      const { isOnboard, isVerified, accessToken, refreshToken } = user as UserResponseWithTokens

      dispatch(userActions.setUser({ ...user }))
      localStorageObj.add('isOnboard', !!isOnboard)
      if (accessToken) {
        localStorageObj.add('accessToken', accessToken)
      }
      if (refreshToken) {
        localStorageObj.add('refreshToken', refreshToken)
      }
      if (!isVerified) {
        return dispatch(toMailOtp() as AppDispatch)
      }
      if (!isOnboard) {
        return dispatch(toOnBoard() as AppDispatch)
      }
      dispatch(toChats() as AppDispatch)
    } catch (error: unknown) {
      console.log('error - ', error)
      dispatch(authActions.setIsError(true))
    } finally {
      dispatch(authActions.setIsLoading(false))
    }
  },
)
const signUp = createAsyncThunk(
  'auth/signUp',
  async (payload: { email: string; password: string }, { dispatch }) => {
    try {
      dispatch(authActions.setIsLoading(true))
      const user = await authApi.signUp({ email: payload?.email, password: payload?.password })
      const { isOnboard } = user as UserResponseWithoutTokens
      localStorageObj.add('isOnboard', !!isOnboard)
      dispatch(userActions.setUser({ ...user }))
      dispatch(toMailOtp() as AppDispatch)
    } catch (error: unknown) {
      console.log('error - ', error)
    } finally {
      dispatch(authActions.setIsLoading(false))
    }
  },
)

const otpCode = createAsyncThunk(
  'auth/confirm',
  async (payload: { otpCode: number }, { dispatch, getState }) => {
    try {
      const { user } = getState() as RootState
      dispatch(authActions.setIsLoading(true))
      const response = await authApi.otpCode({ userId: user.user.id, code: payload?.otpCode })
      const { isOnboard, accessToken, refreshToken } = response as UserResponseWithTokens

      dispatch(userActions.setUser({ ...response }))
      localStorageObj.add('isOnboard', !!isOnboard)
      if (accessToken) {
        localStorageObj.add('accessToken', accessToken)
      }
      if (refreshToken) {
        localStorageObj.add('refreshToken', refreshToken)
      }
      if (!isOnboard) {
        return dispatch(toOnBoard() as AppDispatch)
      }
      dispatch(toChats() as AppDispatch)
    } catch (error: unknown) {
      console.log('error - ', error)
    } finally {
      dispatch(authActions.setIsLoading(false))
    }
  },
)

const otpCodeRepeat = createAsyncThunk(
  'auth/repeat',
  async (payload: { userId: string }, { dispatch }) => {
    try {
      dispatch(authActions.setIsLoading(true))
      await authApi.otpCodeRepeat({ userId: payload?.userId })
    } catch (error: unknown) {
      console.log('error - ', error)
    } finally {
      dispatch(authActions.setIsLoading(false))
    }
  },
)

const passwordLink = createAsyncThunk(
  'auth/passwordLink',
  async (payload: { email: string }, { dispatch }) => {
    try {
      dispatch(authActions.setIsLoading(true))
      const link = await authApi.passwordLink({ email: payload?.email })
      console.log(link)
    } catch (error: unknown) {
      console.log('error - ', error)
    } finally {
      dispatch(authActions.setIsLoading(false))
    }
  },
)

const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (payload: { password: string; userId: string }, { dispatch }) => {
    try {
      dispatch(authActions.setIsLoading(true))
      const user = await authApi.resetPassword({
        password: payload?.password,
        userId: payload?.userId,
      })
      console.log(user)
    } catch (error: unknown) {
      console.log('error - ', error)
    } finally {
      dispatch(authActions.setIsLoading(false))
    }
  },
)

const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, { payload: accessToken }: PayloadAction<string>) => {
      state.accessToken = accessToken
    },
    setRefreshToken: (state, { payload: accessToken }: PayloadAction<string>) => {
      state.accessToken = accessToken
    },
    setIsLoading: (state, { payload: isLoading }: PayloadAction<boolean>) => {
      state.isLoading = isLoading
    },

    setSignInState: (state, { payload: signInState }: PayloadAction<SignInState>) => {
      state.signInState = signInState
    },
    setSignUpState: (state, { payload: signUpState }: PayloadAction<SignUpState>) => {
      state.signUpState = signUpState
    },
    setOtpCode: (state, { payload: otpCodeState }: PayloadAction<OtpCodeState>) => {
      state.otpCodeState = otpCodeState
    },
    setResetPasswordState: (
      state,
      { payload: resetPasswordState }: PayloadAction<ResetPasswordState>,
    ) => {
      state.resetPasswordState = resetPasswordState
    },
    setIsError: (state, { payload: isError }: PayloadAction<boolean>) => {
      state.isError = isError
    },
  },
})

export const authReducer = reducer
export const authActions = {
  ...actions,
  login,
  signUp,
  otpCode,
  otpCodeRepeat,
  passwordLink,
  resetPassword,
}
