'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

interface IProps
{
  Type: string
}

const HomeMenuButtons = ({Type}: IProps) =>
{
  const router = useRouter();

  const type: string = Type;

  const [hoveringButton, setHoveringButton] = useState(false);

  const renderSvg = () =>
  {
    if (type == "PROJECTS") {
      return(
        <>
          <path d="M4.5 3.75a3 3 0 0 0-3 3v11.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V9.75l-6-6h-12Z"/>
          <path d="M16.5 3.75v3a3 3 0 0 0 3 3h3l-6-6Z"/>
          <rect x="4.5" y="9.5" width="9" height="0.75" rx="0.375" fill="rgba(0,0,0,0.2)"/>
          <rect x="4.5" y="11.75" width="12" height="0.75" rx="0.375" fill="rgba(0,0,0,0.2)"/>
          <rect x="4.5" y="14" width="10.5" height="0.75" rx="0.375" fill="rgba(0,0,0,0.2)"/>
          <rect x="4.5" y="16.25" width="8" height="0.75" rx="0.375" fill="rgba(0,0,0,0.2)"/>
        </>
      )
    }else if (type == "ABOUT") {
      return(
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/>
        </>
      )
    }else if (type == "CONTACT") {
      return(
        <>
          <path d="M5.25 3.75a2.25 2.25 0 0 0-2.25 2.25v12a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H5.25Z"/>
          <rect x="6" y="6" width="12" height="9" rx="1" fill="rgba(0,0,0,0.3)"/>
          <circle cx="12" cy="17.25" r="1" fill="rgba(0,0,0,0.3)"/>
        </>
      )
    }else if (type == "REPO") {
      return(
        <>
          <path d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h3.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12H18.75A2.25 2.25 0 0 1 21 8.25v9a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"/>
          <path d="M9 11.25l-1.5 1.5 1.5 1.5" stroke="rgba(0,0,0,0.4)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 11.25l1.5 1.5-1.5 1.5" stroke="rgba(0,0,0,0.4)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </>
      )
    }
  }

  return (
    <div
      className="flex w-[175px] h-[175px] items-center justify-center">
      <button
        onMouseEnter={() => setHoveringButton(true)}
        onMouseLeave={() => setHoveringButton(false)}
        onClick={() =>
        {
          if (type === "REPO"){
            window.open("https://github.com/CharlesOrrDev/portfolio");
          }else {
            router.push(`/${type}`);
          }
        }}
        className={`cursor-none text-center outline-[2px] rounded-[10px] text-gray-400 ease-in-out duration-350 bg-gray-950 flex items-center justify-center overflow-clip
          ${hoveringButton ? "w-[200px] h-[200px]" : "w-[175px] h-[175px]"}
        `}
      >
        <div className="grid">
          <div
            className={`rounded-[10px] opacity-30 col-start-1 row-start-1 flex self-center place-self-center ease-in-out duration-350
              ${hoveringButton ? "bg-[radial-gradient(circle_at_center,_oklch(72.3%_0.219_149.579)_0%,_#032e15_100%)]  w-[200px] h-[200px]" : "bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#030712_100%)] w-[175px] h-[175px]"}
            `}
          />
          <div
            className="w-[200px] h-[200px] grid justify-center items-center col-start-1 row-start-1">
            <a
              className={`col-start-1 row-start-1 cursor-none ease-in-out duration-350
                ${hoveringButton ? "w-[200px] h-[200px]" : "w-[175px] h-[175px]"}
              `}
            >
              <svg width="100%" height="100%" viewBox="0 2 40 40" xmlns="http://www.w3.org/2000/svg" fill="white" opacity="0.9">
                <g transform="translate(8, 6)">
                  {renderSvg()}
                </g>
              </svg>
            </a>
            <p
              className={`col-start-1 row-start-1 ease-in-out duration-350
                ${hoveringButton ? "text-4xl mt-[120px]" : "text-3xl mt-[100px]"}
              `}
            >
              {type}
            </p>
          </div>
        </div>
      </button>
    </div>
  )
}

export default HomeMenuButtons