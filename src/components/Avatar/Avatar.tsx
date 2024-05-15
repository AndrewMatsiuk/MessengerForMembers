import React from 'react'
import { AvatarProps } from './types'
import { getAbbreviation, getRandomHexColor } from '../../helpers'

export const Avatar: React.FC<AvatarProps> = ({ width, url, name, isOnline }) => {
  let abbreviation
  let bg
  if (!url) {
    abbreviation = getAbbreviation(name as string)
    bg = getRandomHexColor()
  }

  return (
    <>
      <div className={`w-[${width}px] h-[${width}px] relative`}>
        {url ? (
          <div>
            <img alt='Avatar' src={url} width={width} className='rounded-full' />
          </div>
        ) : (
          <div
            className={`w-[50px] h-[${width}px] flex items-center justify-center rounded-full text-center`}
            style={{ backgroundColor: bg }}
          >
            {abbreviation}
          </div>
        )}
        {isOnline && (
          <div
            className={
              'absolute bottom-[0px] right-[5px] h-[10px] w-[10px] rounded-full bg-lime-500'
            }
          ></div>
        )}
      </div>
    </>
  )
}
