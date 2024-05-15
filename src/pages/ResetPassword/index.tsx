import { useState } from 'react'
import { BasicInput, LetterMessageSvg } from '../../components'
import { BasicButton } from '../../components/Buttons'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { authActions } from '../../store/auth/reducer'

export const ResetPassword = () => {
  const [email, setEmail] = useState('')

  const dispatch = useDispatch<AppDispatch>()
  const handleSubmit = () => {
    dispatch(authActions.passwordLink({ email }))
  }

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setEmail(value)
  }

  return (
    <div className='mx-auto flex w-1/3 flex-col items-center gap-6'>
      <LetterMessageSvg />
      <h2 className='text-lg font-bold '> Password Reset</h2>
      <p className='text-[#B5B5B5]'>
        Enter your e-mail and we’ll send you instructions on how to reset your password
      </p>
      <BasicInput
        placeholder='Email Address'
        type='text'
        id='email'
        value={email}
        onChange={onChange}
      />
      <BasicButton disabled={false} onClick={handleSubmit} styleClassName='bg-[#006CFF] text-white'>
        <span>SEND</span>
      </BasicButton>
    </div>
  )
}
