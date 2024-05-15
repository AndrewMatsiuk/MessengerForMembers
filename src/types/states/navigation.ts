export type NavigationAction = {
  to: string
  state?: unknown
}

export type NavigationState = {
  history: NavigationAction[]
  navigateTo: NavigationAction | null
}
