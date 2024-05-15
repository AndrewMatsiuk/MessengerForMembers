import React, { useEffect } from 'react'
import { BasicInput, UserProfileRatingIcon, BasicButton } from '../../components'
import EditUserInfo from './components/EditUserInfo'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../store/user/selectors'
import { AppDispatch } from '../../store'
import { userActions } from '../../store/user/reducer'

export const OnboardingPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector(selectUser)
  const { description, phoneNumber } = user
  const { email } = useSelector(selectUser)

  useEffect(() => {
    dispatch(userActions.getUser())
  }, [])

  const handleSubmit = () => {
    dispatch(userActions.onBoarding({ user }))
  }

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = target

    dispatch(
      userActions.setUser({ ...user, [id]: id === 'nickName' ? value.split('@')[1] || '' : value }),
    )
  }

  return (
    <div className='mx-auto flex w-[40%] flex-col items-center justify-center gap-2'>
      <UserProfileRatingIcon />
      <h2 className='font-inter text-6xl text-[#006CFF99]'>Welcome</h2>
      <p>Create your account</p>
      <EditUserInfo onChange={onChange} />
      <BasicInput
        placeholder='About me'
        type=''
        id='description'
        value={description || ''}
        onChange={onChange}
      />
      <BasicInput disabled placeholder='Email' type='text' id='email' value={email} />
      <BasicInput
        placeholder='Number'
        type='text'
        id='phoneNumber'
        value={phoneNumber || ''}
        onChange={onChange}
      />
      <BasicButton
        disabled={false}
        onClick={handleSubmit}
        styleClassName='text-[#006CFF] m-0-auto mt-5'
      >
        START →
      </BasicButton>
    </div>
  )
}
