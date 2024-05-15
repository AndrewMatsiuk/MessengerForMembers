import { TextLastMessage } from './TextLastMessage'
import { ImageLastMessage } from './ImageLastMessage'
import { IsTypingLastMessage } from './IsTypingLastMessage'

export * from './TextLastMessage'
export * from './ImageLastMessage'
export * from './IsTypingLastMessage'

export const lastMessageMap = {
  text: TextLastMessage,
  image: ImageLastMessage,
  typing: IsTypingLastMessage,
}
