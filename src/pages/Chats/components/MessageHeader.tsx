import React from 'react'
import { CallMessageHeaderSvg, VideoCallMessageHeaderSvg } from '../../../components'
import { MessageHeaderProps } from './types'

export const MessageHeader: React.FC<MessageHeaderProps> = (props) => {
  const { avatarUrl, name, isOnline } = props
  return (
    <div className='  border-b border-b-[#EAF3FF]'>
      <div className='m-[2%] ml-[3%]'>
        <div className='flex justify-between'>
          <div className=' ml-[1.2%] flex'>
            <img alt='Avatar' src={avatarUrl as string} width={'50px'} className='rounded-full' />
            <div className='ml-[5%]'>
              <div className=' text-lg text-[#676767]'>{name}</div>
              <div className='text-[16px] text-[#46464666]'>{isOnline ? 'Online' : 'Offline'}</div>
            </div>
          </div>
          <div className='flex '>
            <div className='mr-5'>
              <CallMessageHeaderSvg />
            </div>
            <div className='mr-7'>
              <VideoCallMessageHeaderSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
