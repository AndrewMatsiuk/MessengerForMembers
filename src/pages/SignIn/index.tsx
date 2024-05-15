import React from 'react'
import { BasicButton, InputForm, AvatarSighIn, GroupSingIn } from '../../components'
import { BasicInputProps } from '../../components/Inputs/types'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import { toResetPassword, toSignUp } from '../../store/navigation/redirects'
import { selectSignInState } from '../../store/auth/selectors'
import { authActions } from '../../store/auth/reducer'

export const SignInPage: React.FC = () => {
  const signInState = useSelector(selectSignInState)
  const { email, password } = signInState
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = () => {
    if (email && password) {
      dispatch(authActions.login({ email, password }))
    }
  }

  const navigateToSignUp = () => {
    dispatch(toSignUp())
  }

  const navigateToResetPassword = () => {
    dispatch(toResetPassword())
  }

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = target
    dispatch(authActions.setSignInState({ ...signInState, [id]: value }))
  }

  const inputList: BasicInputProps[] = [
    { id: 'email', placeholder: 'Email Address', type: 'text', onChange, value: email },
    {
      id: 'password',
      placeholder: 'Password',
      type: 'password',
      showPassword: true,
      onChange,
      value: password,
    },
  ]

  return (
    <div className='flex h-full w-full'>
      <div className='flex-1 items-center justify-center  '>
        <div className='flex  items-center  justify-center pb-[8%] pt-[10%] '>
          <AvatarSighIn />
        </div>
        <div className='flex items-center justify-center pb-[27px] pl-[20%]  pr-[25%]  font-sans text-[20px] text-[#B5B5B5]'>
          Welcome back! Please log in to your account to continue
        </div>
        <div className='pl-[20%] pr-[20%]  '>
          <InputForm inputList={inputList} />
        </div>
        <div className='flex justify-between pb-[8%] pl-[20%] pr-[20%]  pt-[2%]'>
          <div className='flex flex-1 flex-row items-center text-[#B5B5B5]'>
            <input
              type='checkbox'
              className='mr-[3%] h-[21px]  w-[21px] border-[#B5B5B5]	text-[#B5B5B5]   '
            />
            <div className='flex-1'>Remember me</div>
          </div>

          <div
            className='cursor-pointer font-sans text-[#006CFF99]'
            onClick={navigateToResetPassword}
          >
            Forgot Password
          </div>
        </div>

        <div className='flex justify-around pl-[13%] pr-[13%]'>
          <BasicButton
            disabled={false}
            styleClassName={'text-[#FFFFFF] bg-[#006CFF]'}
            onClick={handleSubmit}
          >
            {'LOG IN'}
          </BasicButton>
          <BasicButton
            disabled={false}
            styleClassName={'text-[#006CFF]'}
            onClick={navigateToSignUp}
          >
            {'SIGN UP'}
          </BasicButton>
        </div>
      </div>

      <div className='flex  flex-1 justify-center pr-[5%] pt-[5%] '>
        <GroupSingIn />
      </div>
    </div>
  )
}
