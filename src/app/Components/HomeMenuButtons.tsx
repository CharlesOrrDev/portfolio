'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Iprops
{
  buttonName: string
}

const HomeMenuButtons = ({buttonName}: Iprops) =>
{
  const router = useRouter();

  const [isHovering, setIsHovering] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() =>
  {
    if (isClicked)
    {
      if (buttonName == "REPOSITORY")
      {
        window.open("https://github.com/CharlesOrrDev/portfolio", "_blank", "noopener,noreferrer")
      }else
      {
        router.push(`/${buttonName}`);
      }
    }
  },[isClicked])

  return (
    <div className={`
        ${isHovering ?
        "ml-[12%] ease-in-out duration-250 h-[9%] flex items-center" :
        "ml-[16%] ease-in-out duration-250 h-[9%] flex items-center"}
      `}>
        <button
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseDown={() => setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
          className={`text-left cursor-pointer
            ${isHovering ?
            "w-full text-4xl ease-in-out duration-250 bg-gradient-to-r from-gray-700 from-[1%] via-white via-10% to-gray-700 to-[99%] py-[2px] rounded-[4px]" :
            "w-[320px] ease-in-out duration-250 text-2xl bg-gradient-to-r from-gray-700 from-[1%] via-white via-20% to-gray-700 to-[99%] py-[1px] rounded-[4px]"}
          `}>
          <p
            className={`pl-[75px] bg-gray-950
              ${isClicked ?
              "ease-in-out duration-150 bg-gradient-to-r from-gray-300 from-[1%] via-gray-500 via-20% to-gray-300 to-[99%] text-gray-950" :
              ""}
            `}>{buttonName}
          </p>
        </button>
    </div>
  )
}

export default HomeMenuButtons