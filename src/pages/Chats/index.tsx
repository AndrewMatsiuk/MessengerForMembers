import { messagesList } from '../../mock/messages'
import { ChatsList, MessageView, NavBarChats } from './components'
import { InputMessage } from './components/InputMessage'
import { MessageHeader } from './components/MessageHeader'

export const Chats = () => {
  return (
    <div className='flex  h-screen 	'>
      <div className='mt-[5%] flex w-[7%] place-content-center  '>
        <NavBarChats />
      </div>
      <div className=' basis-1/4 bg-[#EAF3FF] '>
        <ChatsList />
      </div>
      <div className='  basis-[70%]	'>
        <div>
          <MessageHeader
            avatarUrl='https://xsgames.co/randomusers/avatar.php?g=pixel&key=1'
            name='Oleg'
            isOnline={true}
          />
        </div>
        <div className='ml-12 mt-12 flex flex-col gap-5'>
          {messagesList.map((item, index) => (
            <MessageView data={item} key={index} />
          ))}
        </div>
        <div className='fixed bottom-0'>
          <InputMessage />
        </div>
      </div>
    </div>
  )
}
