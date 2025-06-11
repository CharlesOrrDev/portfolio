'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import MouseFollowEffect from './MouseFollowEffect';

const EnterButton = () =>
{
  const router = useRouter();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  const [hoveringEnter, setHoveringEnter] = useState(false);

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
    <div className="w-full h-full flex items-center justify-center">
    <div
      className="w-[99.5%] h-[99%] grid overflow-hidden relative cursor-none items-center justify-center"
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onMouseEnter={() => setHoveringEnter(true)}
        onMouseLeave={() => setHoveringEnter(false)}
        onClick={() => router.push(`/ENTER`)}
        className={`w-full h-[20%] cursor-none text-4xl text-center z-50 px-[60px]
          ${hoveringEnter ? "bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-5xl text-transparent ease-in-out duration-500" : "text-gray-400 ease-in-out duration-500"}
        `}
      >
        ENTER
      </button>

      <MouseFollowEffect mousePos={mousePos} isHovering={isHovering} windowDimensions={windowDimensions} hoveringEnter={hoveringEnter} hoveringProjects={false} hoveringAbout={false} hoveringContact={false} hoveringRepo={false} />

    </div>
    </div>
  )
}

export default EnterButton