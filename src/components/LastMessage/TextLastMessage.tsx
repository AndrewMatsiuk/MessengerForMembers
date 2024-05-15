import React from 'react'

type Props = {
  value: string
}

export const TextLastMessage: React.FC<Props> = ({ value }) => {
  return (
    <div style={{ color: '#464646' }} className='text-sm'>
      {value}
    </div>
  )
}
