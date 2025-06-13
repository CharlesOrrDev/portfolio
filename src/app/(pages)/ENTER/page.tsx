'use client'

import HomeMenuButtons from '@/app/Components/HomeMenuButtons'
import MouseFollowEffect from '@/app/Components/MouseFollowEffect'
import React, { useEffect, useRef, useState } from 'react'

export default function Home()
{
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  const [hoveringButton, setHoveringButton] = useState(false);

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
    if (typeof window === "undefined") return;
  
    const updateWindowDimensions = () =>
    {
      setWindowDimensions({width: window.innerWidth, height: window.innerHeight});
    }
  
    updateWindowDimensions();
  
    window.addEventListener("resize", updateWindowDimensions);
  
    return () =>
    {
      window.removeEventListener("resize", updateWindowDimensions);
    }
  },[])

  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="w-[99.5%] h-[99%] grid overflow-hidden relative cursor-none"
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid gap-[100px] justify-center items-center">
            <div
              className="col-start-1 row-start-1"
              onMouseEnter={() => setHoveringButton(true)}
              onMouseLeave={() => setHoveringButton(false)}
            >
              <HomeMenuButtons Type="PROJECTS" />
            </div>

            <div
              className="col-start-2 row-start-1"
              onMouseEnter={() => setHoveringButton(true)}
              onMouseLeave={() => setHoveringButton(false)}
            >
              <HomeMenuButtons Type="ABOUT" />
            </div>

            <div
              className="col-start-3 row-start-1"
              onMouseEnter={() => setHoveringButton(true)}
              onMouseLeave={() => setHoveringButton(false)}
            >
              <HomeMenuButtons Type="CONTACT" />
            </div>

            <div
              className="col-start-4 row-start-1"
              onMouseEnter={() => setHoveringButton(true)}
              onMouseLeave={() => setHoveringButton(false)}
            >
              <HomeMenuButtons Type="REPO" />
            </div>
          </div>

          <MouseFollowEffect mousePos={mousePos} isHovering={isHovering} windowDimensions={windowDimensions} hoveringEnter={false} hoveringButton={hoveringButton} />

        </div>
      </div>
    </>
  )
}