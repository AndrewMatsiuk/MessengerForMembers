import React, { useEffect, useRef, useState } from 'react'

type Props = {
  name: string
}

export const IsTypingLastMessage: React.FC<Props> = ({ name }) => {
  const [dots, setDots] = useState('....')
  const interval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    interval.current && clearInterval(interval.current)
    interval.current = setInterval(() => {
      if (dots?.length === 4) {
        return setDots('.')
      }
      setDots(dots + '.')
    }, 200)

    return () => {
      interval.current && clearInterval(interval.current)
    }
  }, [dots])

  return (
    <div style={{ color: '#464646' }} className='text-sm'>
      {name} is typing {dots}
    </div>
  )
}
