import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { authActions } from '../../store/auth/reducer'
import { OtpInput } from '../Inputs'
import { OtpFormProps } from './types'

let currentOtpIndex = 0

export const OtpForm: React.FC<OtpFormProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>()
  const { inputCount } = props

  const [otp, setOtp] = useState<string[]>(new Array(inputCount).fill(''))
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target
    if (!/[^0-9]/.test(value)) {
      const newOtp: string[] = [...otp]
      newOtp[currentOtpIndex] = value.substring(value.length - 1)
      if (!value) {
        setActiveOtpIndex(currentOtpIndex - 1)
      } else {
        setActiveOtpIndex(currentOtpIndex + 1)
      }
      setOtp(newOtp)
    }
  }

  const handleOnKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    currentOtpIndex = index
    if (key === 'Backspace') {
      setActiveOtpIndex(currentOtpIndex - 1)
    }
  }

  useEffect(() => {
    if (otp.join('').length === inputCount) {
      const userCode = +otp.toString().replaceAll(',', '')
      dispatch(authActions.otpCode({ otpCode: userCode }))
    }
  }, [otp])

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOtpIndex])

  return (
    <div className='flex flex-nowrap 	'>
      {otp.map((value, index) => {
        return (
          <OtpInput
            ref={index === activeOtpIndex ? inputRef : null}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            onChange={handleOnChange}
            value={value}
            key={index}
          />
        )
      })}
    </div>
  )
}
