import { AuthState, UserState } from './states'
import { NavigationState } from './states/navigation'
export * from './states'
export * from './user'
export * from './chat'
export * from './message'

export type RootState = {
  auth: AuthState
  navigation: NavigationState
  user: UserState
}
