import React, { useState } from 'react'
import { DefaultAvatarSvg } from '../svg'

export const AvatarUploadComponent: React.FC = () => {
  
     const [selectedImg, setSelectedImg] = useState('')

    const handleSetSelectedImg = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e?.target?.files?.[0] as File
      setSelectedImg(URL.createObjectURL(file))
    }

    return (
      <div className='relative flex h-20  w-20 items-center justify-center rounded-full  bg-white'>
        <input
          onChange={handleSetSelectedImg}
          className=' absolute w-20 opacity-0'
          type='file'
          accept='image/jpg'
        />

        {selectedImg ? (
          <img
            src={selectedImg}
            alt='Selected'
            className='w-full rounded-full bg-white object-contain'
          />
        ) : (
          <div className='text-center'>
            <DefaultAvatarSvg />
          </div>
        )}
      </div>
    )
  
}
