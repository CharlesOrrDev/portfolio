'use client'

import React from 'react'

interface IProps
{
  mousePos: { x: number, y: number },
  isHovering: boolean,
  windowDimensions: { width: number, height: number },
  hoveringEnter: boolean,
  hoveringProjects: boolean,
  hoveringAbout: boolean,
  hoveringContact: boolean,
  hoveringRepo: boolean
}

const MouseFollowEffect = ({mousePos, isHovering, windowDimensions, hoveringEnter, hoveringProjects, hoveringAbout, hoveringContact, hoveringRepo}: IProps) =>
{
  return (
    <div
      id="MouseEffect"
      className={`absolute grid pointer-events-none transition-opacity duration-600 ${isHovering ? "opacity-100" : "opacity-0"}`}
      style={{ left: mousePos.x - (windowDimensions.width + 50), top: mousePos.y - (windowDimensions.height + 50), transform: "translate(0, 0)" }}
    >
      {/* Main Square */}
      <div
        className={`w-[50px] h-[50px] col-start-2 row-start-2 p-[2px] pr-[1px] pb-[1px] rounded-tl-full
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-tl from-green-500 via-green-950 to-green-500" : "bg-gradient-to-tl from-white via-gray-700 to-white"}
        `}
      >
        <div className="bg-gray-950 w-full h-full rounded-br-[5px] rounded-tl-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
      </div>

      <div
        className={`w-[50px] h-[50px] col-start-3 row-start-2 p-[2px] pl-[1px] pb-[1px] rounded-tr-full
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-tr from-green-500 via-green-950 to-green-500" : "bg-gradient-to-tr from-white via-gray-700 to-white"}
        `}
      >
        <div className="bg-gray-950 w-full h-full rounded-bl-[5px] rounded-tr-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
      </div>

      <div
        className={`w-[50px] h-[50px] col-start-2 row-start-3 p-[2px] pr-[1px] pt-[1px] rounded-bl-full
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-bl from-green-500 via-green-950 to-green-500" : "bg-gradient-to-bl from-white via-gray-700 to-white"}
        `}
      >
        <div className="bg-gray-950 w-full h-full rounded-tr-[5px] rounded-bl-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
      </div>

      <div
        className={`w-[50px] h-[50px] col-start-3 row-start-3 p-[2px] pl-[1px] pt-[1px] rounded-br-full
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-br from-green-500 via-green-950 to-green-500" : "bg-gradient-to-br from-white via-gray-700 to-white"}
        `}
      >
        <div className="bg-gray-950 w-full h-full rounded-tl-[5px] rounded-br-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
      </div>
      {/* Main Square */}


      {/* Left/Right Lines */}
      <div
        className={`w-[100vw] h-[1px] self-end col-start-1 row-start-2
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-r from-green-950 via-green-500 to-green-950" : "bg-gradient-to-r from-gray-700 via-gray-50 to-gray-700"}
        `}
      />

      <div
        className={`w-[100vw] h-[1px] self-end col-start-4 row-start-2
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-l from-green-950 via-green-500 to-green-950" : "bg-gradient-to-l from-gray-700 via-gray-50 to-gray-700"}
        `}
      />

      <div
        className={`w-[100vw] h-[1px] col-start-1 row-start-3
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-r from-green-950 via-green-500 to-green-950" : "bg-gradient-to-r from-gray-700 via-gray-50 to-gray-700"}
        `}
      />

      <div
        className={`w-[100vw] h-[1px] col-start-4 row-start-3
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-l from-green-950 via-green-500 to-green-950" : "bg-gradient-to-l from-gray-700 via-gray-50 to-gray-700"}
        `}
      />
      {/* Left/Right Lines */}


      {/* Top/Bottom Lines */}
      <div
        className={`w-[1px] h-[100vh] ml-[49px] col-start-2 row-start-1
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-b from-green-950 via-green-500 to-green-950" : "bg-gradient-to-b from-gray-700 via-gray-50 to-gray-700"}
        `}
      />

      <div
        className={`w-[1px] h-[100vh] col-start-3 row-start-1
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-b from-green-950 via-green-500 to-green-950" : "bg-gradient-to-b from-gray-700 via-gray-50 to-gray-700"}
        `}
      />

      <div
        className={`w-[1px] h-[100vh] col-start-2 row-start-4 ml-[49px]
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-t from-green-950 via-green-500 to-green-950" : "bg-gradient-to-t from-gray-700 via-gray-50 to-gray-700"}
        `}
      />

      <div
        className={`w-[1px] h-[100vh] col-start-3 row-start-4
          ${hoveringEnter || hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-t from-green-950 via-green-500 to-green-950" : "bg-gradient-to-t from-gray-700 via-gray-50 to-gray-700"}
        `}
      />
      {/* Top/Bottom Lines */}

    </div>
  )
}

export default MouseFollowEffect