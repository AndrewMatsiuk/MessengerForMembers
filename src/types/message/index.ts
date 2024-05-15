// eslint-disable-next-line spaced-comment
export type LastMessageType = 'text' | 'image' | 'typing' //typing is should delete

export type LastMessage = {
  id: string
  type: LastMessageType
  value: string | null
}

export type Message = {
  message: { value: string; time: string; type: 'text' | 'image' }
  sender: { name: string; avatarUrl: string | null }
}
