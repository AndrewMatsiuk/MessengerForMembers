import React from 'react'
import { BasicButtonProps } from './types'

export const BasicButton: React.FC<BasicButtonProps> = (props) => {
  const { disabled, children, styleClassName, onClick } = props

  return (
    <div>
      <button
        disabled={disabled}
        className={`h-[50px] w-[166px] border-2 border-[#006CFF]  text-[18px]  ${styleClassName}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}
