import React from 'react'
import { MessageViewProps } from './types'

export const MessageView: React.FC<MessageViewProps> = ({ data }) => {
  const { message, sender } = data
  const { value, time } = message
  const { name, avatarUrl } = sender

  return (
    <div className='flex  max-w-[470px] justify-start '>
      <div className='flex basis-2/12	'>
        <div>
          <img alt='Avatar' src={avatarUrl as string} width={'50px'} className='rounded-full' />
        </div>
      </div>
      <div className='basis-11/12		'>
        <div className='text-lg text-[#676767]'>{name}</div>
        <div className='relative '>
          <div className=' mb-[-1px] h-[10px] w-[10px] bg-[#C1DBFF] [clip-path:polygon(100%_100%,0%_100%,0%_0%)]	'></div>
          <div className='flex'>
            <div className='relative bg-gradient-to-r from-[#C1DBFF] p-5'>
              {value}
              <div className='absolute right-[-15px] top-[-10px] text-[12px] text-[#006CFF99]'>
                {time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
