import { RootState } from '../../types'

export const selectNavigationHistory = ({ navigation }: RootState) => navigation.history
export const selectNavigateTo = ({ navigation }: RootState) => navigation.navigateTo
