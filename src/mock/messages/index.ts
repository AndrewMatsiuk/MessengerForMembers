import { Message } from '../../types'

export const messagesList: Message[] = [
  {
    message: {
      value: 'Hi Andrii',
      time: '14:45',
      type: 'text',
    },
    sender: {
      name: 'Oleg',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
    },
  },
  {
    message: {
      value: 'Hi Oleg, how are you?',
      time: '15:45',
      type: 'text',
    },
    sender: {
      name: 'Andrii',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
    },
  },
  {
    message: {
      value:
        'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ',
      time: '16:00',
      type: 'text',
    },
    sender: {
      name: 'Andrii',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
    },
  },
]
