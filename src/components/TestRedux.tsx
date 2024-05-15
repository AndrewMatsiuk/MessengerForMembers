import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/auth/reducer'
import { selectAccessToken, selectAuthIsLoading } from '../store/auth/selectors'
import { AppDispatch } from '../store'

export const TestRedux = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useSelector(selectAuthIsLoading)
  const accessToken = useSelector(selectAccessToken)

  const login = () => {
    dispatch(authActions.login({ email: 'ewe', password: '1234' }))
  }

  useEffect(() => {
    console.log(accessToken, isLoading)
  }, [accessToken, isLoading])

  return (
    <>
      <button onClick={login}>Redux</button>
      {isLoading && 'Loading'}
    </>
  )
}
