import { Message } from '../../../../types'

export type MessageViewProps = {
  data: Message
}

export type MessageHeaderProps = {
  avatarUrl: string
  name: string
  isOnline: boolean
}
