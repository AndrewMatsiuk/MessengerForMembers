import React from 'react'

type Props = {
  bg: string
  value: number | string
}

export const Badge: React.FC<Props> = ({ bg, value }) => {
  return (
    <div
      // eslint-disable-next-line quotes
      className={`align-center flex h-[20px] w-[20px] items-center justify-center rounded-full text-sm text-white`}
      style={{ backgroundColor: bg }}
    >
      {value}
    </div>
  )
}
