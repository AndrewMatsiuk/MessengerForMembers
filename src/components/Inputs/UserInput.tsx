import React from 'react'
import PenIcon from '../svg/PenIconSvg'
import { BasicInputProps } from './types'

export const UserInput: React.FC<BasicInputProps> = ({ value, onChange, id }) => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <PenIcon />
      <input
        type='text'
        className='border-b border-solid border-b-white bg-inherit p-1 font-semibold text-white outline-none'
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  )
}
