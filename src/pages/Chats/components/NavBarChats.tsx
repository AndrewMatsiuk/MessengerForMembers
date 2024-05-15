import {
  CallsNavBarSvg,
  ChatsNavBarSvg,
  SettingsNavBarSvg,
  UserNavBarSvg,
} from '../../../components/svg'

export const NavBarChats = () => {
  return (
    <div className='flex flex-col gap-12 pl-[5%] pt-[30%]'>
      <UserNavBarSvg />
      <ChatsNavBarSvg />
      <CallsNavBarSvg />
      <SettingsNavBarSvg />
    </div>
  )
}
