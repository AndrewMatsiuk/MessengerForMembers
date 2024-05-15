import React from 'react'
import { BasicButton, InputForm, AvatarSighIn, GroupSingIn } from '../../components'
import { BasicInputProps } from '../../components/Inputs/types'
import { useDispatch, useSelector } from 'react-redux'
import { toLogin } from '../../store/navigation/redirects'
import { AppDispatch } from '../../store'
import { authActions } from '../../store/auth/reducer'
import { selectSignUpState } from '../../store/auth/selectors'

export const SignUpPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const signUpState = useSelector(selectSignUpState)
  const { email, password, repeatPassword } = signUpState

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = target
    dispatch(authActions.setSignUpState({ ...signUpState, [id]: value }))
  }

  const inputList: BasicInputProps[] = [
    {
      id: 'email',
      placeholder: 'Email Address',
      type: 'text',
      onChange,
      value: email,
    },
    {
      id: 'password',
      placeholder: 'Password',
      type: 'password',
      showPassword: true,
      onChange,
      value: password,
    },
    {
      id: 'repeatPassword',
      placeholder: 'Repeat Password',
      type: 'password',
      showPassword: true,
      onChange,
      value: repeatPassword,
    },
  ]

  const navigateToSignIn = () => {
    dispatch(toLogin())
  }

  const navigateToMailOtp = () => {
    if (email && password === repeatPassword) {
      dispatch(authActions.signUp({ email, password }))
    }
  }

  return (
    <div className='flex h-full w-full'>
      <div className='flex-1 items-center justify-center'>
        <div className='flex  items-center  justify-center pb-[8%] pt-[10%]'>
          <AvatarSighIn />
        </div>

        <div className='pl-[20%] pr-[20%]  '>
          <InputForm inputList={inputList} />
        </div>
        <div className='flex justify-between pb-[8%] pl-[20%] pr-[20%] pt-[2%]'>
          <div className='flex flex-1 flex-row items-center text-[#B5B5B5]'>
            <input
              type='checkbox'
              className='mr-[3%] h-[21px]  w-[21px] border-[#B5B5B5] text-[#B5B5B5]'
            />
            <div className='flex-1'>Remember me</div>
          </div>

          <a href='' className='font-sans text-[#006CFF99]'>
            Forgot Password
          </a>
        </div>

        <div className='flex justify-around pl-[13%] pr-[13%]'>
          <BasicButton
            disabled={false}
            styleClassName={'text-[#006CFF]'}
            onClick={navigateToSignIn}
          >
            {'LOG IN'}
          </BasicButton>
          <BasicButton
            disabled={false}
            styleClassName={' text-[#FFFFFF] bg-[#006CFF]'}
            onClick={navigateToMailOtp}
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
