import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectNavigationHistory } from '../store/navigation/selectors'
import { useNavigate } from 'react-router-dom'
import { useAuthGuard } from '../utils'
type Props = {
  children: React.ReactNode
}
export const RouterListener: React.FC<Props> = ({ children }) => {
  useAuthGuard()
  const history = useSelector(selectNavigationHistory)
  const navigate = useNavigate()

  useEffect(() => {
    if (history?.length) {
      const { to, state } = history[history.length - 1]
      navigate(to, { state })
    }
  }, [history])
  return <>{children}</>
}
