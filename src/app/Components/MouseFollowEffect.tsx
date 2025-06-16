'use client'

import React from 'react'

interface IProps
{
  mousePos: { x: number, y: number },
  isHovering: boolean,
  windowDimensions: { width: number, height: number },
  hoveringEnter: boolean,
  hoveringButton: boolean
}

const MouseFollowEffect = ({mousePos, isHovering, windowDimensions, hoveringEnter, hoveringButton}: IProps) =>
{
  return (
    <div
      id="MouseEffect"
      className={`absolute grid pointer-events-none transition-opacity duration-600 ${isHovering ? "opacity-100" : "opacity-0"}`}
      style={{ left: mousePos.x - (windowDimensions.width + 75), top: mousePos.y - (windowDimensions.height + 75), transform: "translate(0, 0)" }}
    >
      {/* Main Circle */}
      <div
        className="w-[50px] h-[50px] col-start-2 row-start-2 p-[2px] pr-[1px] pb-[1px] rounded-tl-full"
      >
        <div className={`outline-[2px] w-full h-full rounded-br-[5px] rounded-tl-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]
          ${hoveringEnter || hoveringButton ? "outline-green-500" : "outline-gray-50"}
        `}/>
      </div>

      <div
        className="w-[50px] h-[50px] col-start-3 row-start-2 p-[2px] pl-[1px] pb-[1px] rounded-tr-full"
      >
        <div className={`outline-[2px] w-full h-full rounded-bl-[5px] rounded-tr-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]
          ${hoveringEnter || hoveringButton ? "outline-green-500" : "outline-gray-50"}
        `}/>
      </div>

      <div
        className="w-[50px] h-[50px] col-start-2 row-start-3 p-[2px] pr-[1px] pt-[1px] rounded-bl-full"
      >
        <div className={`outline-[2px] w-full h-full rounded-tr-[5px] rounded-bl-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]
          ${hoveringEnter || hoveringButton ? "outline-green-500" : "outline-gray-50"}
        `}/>
      </div>

      <div
        className="w-[50px] h-[50px] col-start-3 row-start-3 p-[2px] pl-[1px] pt-[1px] rounded-br-full"
      >
        <div className={`outline-[2px] w-full h-full rounded-tl-[5px] rounded-br-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]
          ${hoveringEnter || hoveringButton ? "outline-green-500" : "outline-greay-50"}
        `}/>
      </div>

      <div className="col-start-2 col-end-4 row-start-2 row-end-4 flex justify-center items-center">
        <div className={`w-[3.6px] h-[3.6px] rounded-full
          ${hoveringEnter || hoveringButton ? "bg-green-500" : "bg-gray-50"}
        `}/>
      </div>
      {/* Main Circle */}


      {/* Left/Right Lines */}
      <div
        className={`w-[100vw] h-[25px] self-end col-start-1 row-start-2 border-r-[2px] border-b-[1px] mr-[25px]
          ${hoveringEnter || hoveringButton ? "border-green-500" : "border-gray-50"}
        `}
      />

      <div
        className={`w-[100vw] h-[25px] self-end col-start-4 row-start-2 border-l-[2px] border-b-[1px] ml-[25px]
          ${hoveringEnter || hoveringButton ? "border-green-500" : "border-gray-50"}
        `}
      />

      <div
        className={`w-[100vw] h-[25px] col-start-1 row-start-3 border-r-[2px] border-t-[1px] mr-[25px]
          ${hoveringEnter || hoveringButton ? "border-green-500" : "border-gray-50"}
        `}
      />

      <div
        className={`w-[100vw] h-[25px] col-start-4 row-start-3 border-l-[2px] border-t-[1px] ml-[25px]
          ${hoveringEnter || hoveringButton ? "border-green-500" : "border-gray-50"}
        `}
      />
      {/* Left/Right Lines */}


      {/* Top/Bottom Lines */}
      <div
        className={`w-[25px] h-[100vh] ml-[25px] col-start-2 row-start-1 border-r-[1px] border-b-[2px] mb-[25px]
          ${hoveringEnter || hoveringButton ? "border-green-500" : "border-gray-50"}
        `}
      />

      <div
        className={`w-[25px] h-[100vh] col-start-3 row-start-1 border-l-[1px] border-b-[2px] mb-[25px]
          ${hoveringEnter || hoveringButton ? "border-green-500" : "border-gray-50"}
        `}
      />

      <div
        className={`w-[25px] h-[100vh] ml-[25px] col-start-2 row-start-4 border-r-[1px] border-t-[2px] mt-[25px]
          ${hoveringEnter || hoveringButton ? "border-green-500" : "border-gray-50"}
        `}
      />

      <div
        className={`w-[25px] h-[100vh] col-start-3 row-start-4 border-l-[1px] border-t-[2px] mt-[25px]
          ${hoveringEnter || hoveringButton ? "border-green-500" : "border-gray-50"}
        `}
      />
      {/* Top/Bottom Lines */}

    </div>
  )
}

export default MouseFollowEffect