import { ChatListItem } from '../../types'

export const chatList: ChatListItem[] = [
  {
    id: '0',
    chatInfo: {
      id: '0',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
      name: 'Oleh',
      nickName: 'OlehYopta',
    },
    lastMessage: { type: 'text', value: 'Hello', id: '0' },
    tmp: {
      isOnline: true,
      unReadableMessages: 1,
    },
  },
  {
    id: '0',
    chatInfo: {
      id: '0',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
      name: 'Taras',
      nickName: 'Taras',
    },
    tmp: {
      isOnline: true,
      unReadableMessages: null,
    },

    lastMessage: { type: 'image', value: null, id: '1' },
  },
  {
    id: '0',
    chatInfo: { id: '0', avatarUrl: null, name: 'Boba Messi', nickName: 'Hitler' },
    lastMessage: { type: 'typing', value: 'Hello', id: '2' },
    tmp: {
      isOnline: false,
      unReadableMessages: 5,
    },
  },
]
