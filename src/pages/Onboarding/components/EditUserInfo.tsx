import { useSelector } from 'react-redux'
import { AvatarUploadComponent, UserInput } from '../../../components'
import { selectUser } from '../../../store/user/selectors'
import React from 'react'

export type Props = {
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
}

const EditUserInfo: React.FC<Props> = ({ onChange }) => {
  const { name, nickName } = useSelector(selectUser)

  return (
    <>
      <div className='flex w-[100%] gap-6  rounded-lg bg-[#006CFF] p-8'>
        <AvatarUploadComponent />
        <div className='flex flex-col justify-between'>
          <UserInput value={name} id='name' onChange={onChange} placeholder='name' type='text' />
          <UserInput
            value={`@${nickName}`}
            id='nickName'
            onChange={onChange}
            placeholder=''
            type='text'
          />
        </div>
      </div>
    </>
  )
}

export default EditUserInfo
