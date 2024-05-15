import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AvatarSighIn, GroupSingIn } from '../../components'
import { OtpForm } from '../../components/Form/OtpForm'
import { AppDispatch } from '../../store'
import { useCountdown } from '../../utils/hooks/useCountdown'
import { toSignUp } from '../../store/navigation/redirects'
import { selectUser } from '../../store/user/selectors'
import { authActions } from '../../store/auth/reducer'

const inputCount = 4

export const OtpPage: React.FC = () => {
  const { secondsLeft, start } = useCountdown()

  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector(selectUser)
  const navigateToPrevRoute = () => {
    dispatch(toSignUp())
  }

  function requestVerificationCode() {
    if (!(secondsLeft > 0)) {
      dispatch(authActions.otpCodeRepeat({ userId: user.id }))
      start(59)
    }
  }

  return (
    <div className='flex h-full w-full'>
      <div className='flex-1 items-center justify-center  '>
        <div className='flex  items-center  justify-center pb-[8%] pt-[10%] '>
          <AvatarSighIn />
        </div>
        <div className='flex pb-[5%] pl-[20%] pr-[25%]  text-center  font-sans text-[20px] text-[#B5B5B5]'>
          The code was sent to your e-mail: {user.email}
        </div>
        <div className='pb-[4%] pl-[26%] pr-[26%]'>
          <OtpForm inputCount={inputCount} />
        </div>
        <div className='flex select-none  justify-center text-[20px] text-[#A1A1A1]	'>
          <p>{'Didn`t receive the code?'}</p>
        </div>
        <div className='flex justify-center text-[20px] text-[#00000080]'>
          {secondsLeft > 0 && `00:${secondsLeft}`}
        </div>
        <div
          className='flex cursor-pointer justify-center text-[20px] text-[#006CFF]	 underline'
          onClick={requestVerificationCode}
        >
          Send Again
        </div>
        <div
          onClick={navigateToPrevRoute}
          className='justify-left ml-[15%] mt-[8%] flex cursor-pointer text-[20px]	 text-[#A1A1A1] underline'
        >
          Back
        </div>
      </div>

      <div className='flex  justify-center pr-[10%] pt-[5%] '>
        <GroupSingIn />
      </div>
    </div>
  )
}
