import { ChatListItem } from '../../../components/ChatListItem'
import { chatList } from '../../../mock'

export const ChatsList = () => {
  return (
    <div>
      <div className='align-center mt-[10%]  text-center text-[22px] text-[#006CFF]'>CHATS</div>
      <div className='mt-5 flex flex-col gap-5'>
        {chatList.map((item) => (
          <ChatListItem chatListItem={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
