import React from 'react'
import { ChatListItemProps } from './types'
import { Avatar } from '../Avatar'
import { lastMessageMap } from '../LastMessage'
import { Badge } from '../Badge'

export const ChatListItem: React.FC<ChatListItemProps> = ({ chatListItem }) => {
  const { chatInfo, lastMessage, tmp } = chatListItem
  const { name, avatarUrl } = chatInfo
  const { type, value } = lastMessage
  const LastMessageComponent = lastMessageMap[type]

  // TO DO - delete
  const { isOnline, unReadableMessages } = tmp

  return (
    <div className='mx-5 flex justify-between'>
      <div className='flex justify-center gap-5'>
        <Avatar width={50} url={avatarUrl as string} name={name} isOnline={isOnline} />
        <div>
          <div className='text-lg' style={{ color: '#676767' }}>
            {name}
          </div>
          <LastMessageComponent name={name} value={value as string} />
        </div>
      </div>
      <div className='flex items-center'>
        {unReadableMessages && <Badge bg='#006CFF' value={unReadableMessages} />}
      </div>
    </div>
  )
}
