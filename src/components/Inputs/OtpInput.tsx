import React, { forwardRef } from 'react'
import { OtpInputProps } from './types'

export const OtpInput = forwardRef<HTMLInputElement, OtpInputProps>((props, ref) => {
  const { onChange, onKeyDown, value } = props

  return (
    <input
      ref={ref}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      className='mr-[20px] h-[75px] w-[100%] rounded-[12px] border-2 border-solid border-[#006CFF] text-center text-[36px] text-[#006CFF99] focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#006CFF] '
    />
  )
})

OtpInput.displayName = 'OtpInput'
