import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { localStorageObj } from '../localStorage'
import { ONBOARD_PROFILE_ROUTE, publicPaths } from '../../routes/routes'
import { toChats, toLogin, toOnBoard } from '../../store/navigation/redirects'
import { useLocation } from 'react-router-dom'
import { JwtPayload, jwtDecode } from 'jwt-decode'
import * as _ from 'lodash'
import { useEffect } from 'react'

export const useAuthGuard = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { pathname } = useLocation()
  const pathNameLoverCase = pathname.toLowerCase()

  useEffect(() => {
    try {
      const accessToken = localStorageObj.get('accessToken')
      const { exp, iat, ...user } = jwtDecode<JwtPayload>(accessToken as string)
      const userId = _.get(user, 'id')
      if (!userId) {
        if (!publicPaths.includes(pathNameLoverCase)) {
          dispatch(toLogin())
        }
      } else if (publicPaths.includes(pathNameLoverCase)) {
        dispatch(toChats())
      } else {
        const isOnboard = localStorageObj.get('isOnboard')
        if (isOnboard === 'false') {
          dispatch(toOnBoard())
        } else if (pathNameLoverCase === ONBOARD_PROFILE_ROUTE.toLowerCase()) {
          dispatch(toChats())
        }
      }
    } catch (e) {
      if (!publicPaths.includes(pathNameLoverCase)) {
        dispatch(toLogin())
      }

      console.log(e)
    }
  }, [pathname])
}
