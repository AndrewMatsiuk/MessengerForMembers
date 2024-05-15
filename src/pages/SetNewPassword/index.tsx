import { useSearchParams } from 'react-router-dom'
import { BasicInput, BasicButton, HappyWalkManSvg } from '../../components'
import { useDispatch } from 'react-redux'
import { toSignIn } from '../../store/navigation/redirects'
import { AppDispatch } from '../../store'
import { useState } from 'react'
import { authActions } from '../../store/auth/reducer'

export const SetNewPassword = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [formState, setFormState] = useState({ password: '', repeatPassword: '' })

  const [searchParams] = useSearchParams()
  const auth = searchParams.get('auth') as string
  console.log(auth)

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = target
    setFormState({ ...formState, [id]: value })
  }

  const handleSubmit = () => {
    dispatch(authActions.resetPassword({ password: formState.password, userId: auth }))
  }

  const navigateToSignIn = () => {
    dispatch(toSignIn())
  }

  return (
    <div className='mx-auto flex w-1/3 flex-col items-center gap-6'>
      <HappyWalkManSvg />
      <h2 className='text-lg font-bold '> Set New Password</h2>
      <p className='text-grey text-left'>Create a new password for your account</p>
      <BasicInput
        placeholder='New Password'
        type='password'
        id='password'
        value={formState.password}
        onChange={onChange}
        showPassword
      />
      <BasicInput
        placeholder='Repeat Password'
        type='password'
        id='repeatPassword'
        value={formState.repeatPassword}
        onChange={onChange}
        showPassword
      />
      <BasicButton
        disabled={false}
        onClick={handleSubmit}
        styleClassName='bg-[#006CFF] text-white w-[195px]'
      >
        RESET PASSWORD
      </BasicButton>
      <a className={'cursor-pointer text-[#006CFF99] underline'} onClick={navigateToSignIn}>
        Back to sign in
      </a>
    </div>
  )
}
