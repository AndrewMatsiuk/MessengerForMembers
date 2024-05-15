import { UserState } from '../../types'

export const selectUser = ({ user }: { user: UserState }) => user.user
export const selectUserIsLoading = ({ user }: { user: UserState }) => user.userIsLoading
