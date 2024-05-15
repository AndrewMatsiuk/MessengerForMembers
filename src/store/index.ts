import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth/reducer'
import { navigationReducer } from './navigation/reducer'
import { userReducer } from './user/reducer'

const store = configureStore({
  reducer: { auth: authReducer, navigation: navigationReducer, user: userReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export default store

export type AppDispatch = typeof store.dispatch
