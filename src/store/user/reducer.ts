import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserState } from '../../types'
import { userApi } from '../../api'
import { localStorageObj } from '../../utils'
import { toChats } from '../navigation/redirects'
import { AppDispatch } from '..'

const initialState: UserState = {
  user: {
    email: '',
    isOnboard: false,
    isVerified: false,
    id: '',
    avatarUrl: '',
    description: '',
    nickName: '',
    name: '',
    phoneNumber: '',
  },
  userIsLoading: false,
}

const getUser = createAsyncThunk('user/getUser', async (_, { dispatch }) => {
  try {
    dispatch(userActions.setIsLoading(true))
    const user = await userApi.getUser()
    dispatch(userActions.setUser(user))
  } catch (error: unknown) {
    console.log('error - ', error)
  } finally {
    dispatch(userActions.setIsLoading(false))
  }
})

const onBoarding = createAsyncThunk(
  'auth/onBoarding',
  async (payload: { user: User }, { dispatch }) => {
    try {
      dispatch(userActions.setIsLoading(true))
      const user = await userApi.onBoarding(payload.user)
      dispatch(userActions.setUser(user))
      localStorageObj.add('isOnboard', true)
      dispatch(toChats() as AppDispatch)
    } catch (error: unknown) {
      console.log('error - ', error)
    } finally {
      dispatch(userActions.setIsLoading(false))
    }
  },
)

const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoading: (state, { payload: isLoading }: PayloadAction<boolean>) => {
      state.userIsLoading = isLoading
    },
    setUser: (state, { payload: user }: PayloadAction<User>) => {
      state.user = user
    },
  },
})

export const userReducer = reducer
export const userActions = { ...actions, getUser, onBoarding }
