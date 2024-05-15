import React from 'react'
import { ImageLastMessageSvg } from '../svg'

export const ImageLastMessage: React.FC = () => {
  return (
    <div className='align-center flex justify-center gap-1'>
      <ImageLastMessageSvg />
      <div className='text-center text-sm' style={{ color: '#464646' }}>
        Sent a picture
      </div>
    </div>
  )
}
