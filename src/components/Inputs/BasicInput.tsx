import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectIsError } from '../../store/auth/selectors'
import { PasswordShow } from '../svg'
import { BasicInputProps } from './types'

export const BasicInput: React.FC<BasicInputProps> = (props) => {
  const { placeholder, type, id, style, showPassword, value, onChange } = props
  const isError = useSelector(selectIsError)
  const [showPasswordGlass, setShowPasswordGlass] = useState(true)
  const toggleType = () => {
    setShowPasswordGlass(!showPasswordGlass)
  }

  return (
    <div className='relative w-full'>
      <input
        type={showPassword ? (showPasswordGlass ? 'password' : 'text') : type}
        id={id}
        style={style}
        className={`mt-1 box-border h-20 w-[100%] border-2 border-solid${
          isError ? 'bg-red-400' : 'bg-[#B5B5B5]'
        } p-5 pt-10 text-[20px] `}
        value={value}
        onChange={onChange}
      />
      {showPassword && (
        <div className='absolute right-3 top-7 cursor-pointer	' onClick={toggleType}>
          <PasswordShow showLine={showPasswordGlass} />
        </div>
      )}

      <label className='absolute left-2 top-[8px] text-[#B5B5B5]'>{placeholder}</label>
    </div>
  )
}
