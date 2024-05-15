import React from 'react'
import {
  FileInputMessageSvg,
  ImageInputMessageSvg,
  VoiceInputMessageSvg,
  WriteInputMessageSvg,
} from '../../../components'

export const InputMessage: React.FC = (props) => {
  return (
    <div className='relative'>
      <div className='flex '>
        <div className=' mb-[6%] ml-[22%] flex '>
          <WriteInputMessageSvg />
          <input
            id='dynamic-textarea'
            placeholder='Your message....'
            className='ml-[2%] w-[390px] pl-2 text-[16px] placeholder-[16px] focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#909090]'
          />
        </div>
        <div className='ml-[55%] flex gap-3'>
          <ImageInputMessageSvg />
          <FileInputMessageSvg />
          <VoiceInputMessageSvg />
        </div>
      </div>
    </div>
  )
}
