import {
  AnyAction,
  PayloadAction,
  ThunkAction,
  ThunkDispatch,
  createAction,
  createSlice,
} from '@reduxjs/toolkit'
import { NavigationAction, NavigationState } from '../../types/states/navigation'
import { RootState } from '../../types'

const initialState: NavigationState = {
  history: [],
  navigateTo: null,
}

export const { reducer, actions: reducerActions } = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    pushHistory: (state, { payload }: PayloadAction<NavigationAction>) => {
      state.history.push(payload)
    },
    clearHistory: (state) => {
      state.history = []
    },
    reset: () => initialState,
  },
})

export const navigateTo =
  ({ to, state }: NavigationAction): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    dispatch(navigationActions.pushHistory({ to, state }))
  }

export const goBack =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: () => RootState) => {
    const { navigation } = getState()
    const { history } = navigation
    if (history?.length >= 2) {
      const prevRoute = history[history.length - 2]
      dispatch(navigationActions.pushHistory(prevRoute))
    }
  }

export const navigationActions = {
  ...reducerActions,
  navigateTo,
  toLogin: createAction('navigation/toLogin'),
}

export const navigationReducer = reducer
