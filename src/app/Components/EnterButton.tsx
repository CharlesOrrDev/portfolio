'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const EnterButton = () =>
{
  const router = useRouter();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) =>
  {
    if (divRef.current)
    {
      const rect = divRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  }

  const handleMouseEnter = () =>
  {
    setIsHovering(true);
  }

  const handleMouseLeave = () =>
  {
    setIsHovering(false);
  }

  useEffect(() =>
  {
    setWindowDimensions({width: window.innerWidth, height: window.innerHeight});
  },[])

  return (
    <div className="w-full h-full flex items-center justify-center">
    <div
      className="w-[99.5%] h-[99%] grid overflow-hidden relative"
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={() => router.push(`/ENTER`)} className="w-full h-full cursor-pointer text-4xl text-white/50 hover:text-white/90 ease-in-out duration-500 text-center z-50">CLICK ANYWHERE</button>

      <div
        id="MouseEffect"
        className={`absolute grid pointer-events-none transition-opacity duration-600 ${isHovering ? "opacity-100" : "opacity-0"}`}
        style={{ left: mousePos.x - (windowDimensions.width + 50), top: mousePos.y - (windowDimensions.height + 50), transform: "translate(0, 0)" }}
      >
        {/* Main Square */}
        <div className="w-[50px] h-[50px] bg-gradient-to-tl from-white via-gray-700 to-white col-start-2 row-start-2 p-[2px] rounded-tl-[3px]">
          <div className="bg-gray-950 w-full h-full rounded-[2px] rounded-tl-[4px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
        </div>

        <div className="w-[50px] h-[50px] bg-gradient-to-tr from-white via-gray-700 to-white col-start-3 row-start-2 p-[2px] rounded-tr-[3px]">
          <div className="bg-gray-950 w-full h-full rounded-[2px] rounded-tr-[4px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
        </div>

        <div className="w-[50px] h-[50px] bg-gradient-to-bl from-white via-gray-700 to-white col-start-2 row-start-3 p-[2px] rounded-bl-[3px]">
          <div className="bg-gray-950 w-full h-full rounded-[2px] rounded-bl-[4px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
        </div>

        <div className="w-[50px] h-[50px] bg-gradient-to-br from-white via-gray-700 to-white col-start-3 row-start-3 p-[2px] rounded-br-[3px]">
          <div className="bg-gray-950 w-full h-full rounded-[2px] rounded-br-[4px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
        </div>
        {/* Main Square */}


        {/* Left/Right Lines */}
        <div className="w-[100vw] h-[2px] self-end bg-gradient-to-r from-white to-gray-700 col-start-1 row-start-2"/>

        <div className="w-[100vw] h-[2px] self-end bg-gradient-to-l from-white to-gray-700 col-start-4 row-start-2"/>

        <div className="w-[100vw] h-[2px] bg-gradient-to-r from-white to-gray-700 col-start-1 row-start-3"/>

        <div className="w-[100vw] h-[2px] bg-gradient-to-l from-white to-gray-700 col-start-4 row-start-3"/>
        {/* Left/Right Lines */}


        {/* Top/Bottom Lines */}
        <div className="w-[2px] h-[100vh] ml-[48px] bg-gradient-to-b from-white to-gray-700 col-start-2 row-start-1"/>

        <div className="w-[2px] h-[100vh] bg-gradient-to-b from-white to-gray-700 col-start-3 row-start-1"/>

        <div className="w-[2px] h-[100vh] bg-gradient-to-t from-white to-gray-700 col-start-2 row-start-4 ml-[48px]"/>

        <div className="w-[2px] h-[100vh] bg-gradient-to-t from-white to-gray-700 col-start-3 row-start-4"/>
        {/* Top/Bottom Lines */}

      </div>
    </div>
    </div>
  )
}

export default EnterButton