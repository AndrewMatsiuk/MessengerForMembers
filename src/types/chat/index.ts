import { LastMessage } from '../message'

export type ChatListItemInfo = {
  id: string
  avatarUrl: string | null
  name: string
  nickName: string
}

type TempForDeleteOnFuture = {
  isOnline: boolean
  unReadableMessages: number | null
}

export type ChatListItem = {
  id: string
  chatInfo: ChatListItemInfo
  lastMessage: LastMessage
  tmp: TempForDeleteOnFuture
}
