import React from 'react'
import { BasicInput } from '../Inputs'
import { InputFormProps } from './types'

export const InputForm: React.FC<InputFormProps> = ({ inputList }) => {
  return (
    <div>
      {inputList.map((input) => (
        <BasicInput
          onChange={input.onChange}
          key={input.id}
          placeholder={input.placeholder}
          type={input.type}
          style={input.style}
          id={input.id}
          showPassword={input.showPassword}
          value={input?.value || ''}
        />
      ))}
    </div>
  )
}
