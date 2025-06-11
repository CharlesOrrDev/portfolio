'use client'

import projectsSvg from '/public/assets/projects.svg'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import MouseFollowEffect from './MouseFollowEffect';

const ApplicationButton = () =>
{
  const router = useRouter();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const divRef = useRef<HTMLDivElement>(null);

  const [hoveringProjects, setHoveringProjects] = useState(false);
  const [hoveringAbout, setHoveringAbout] = useState(false);
  const [hoveringContact, setHoveringContact] = useState(false);
  const [hoveringRepo, setHoveringRepo] = useState(false);

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
        className="w-[99.5%] h-[99%] grid overflow-hidden relative cursor-none"
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <button
            onMouseEnter={() => setHoveringProjects(true)}
            onMouseLeave={() => setHoveringProjects(false)}
            onClick={() => router.push(`/PROJECTS`)}
            className={`absolute cursor-none text-center outline-[2px] rounded-[10px] text-gray-400 ease-in-out duration-350 bg-gray-950 flex items-center justify-center inset-shadow-[0_0_1.5rem_0.1em_rgba(35,35,35,1)]
              ${hoveringProjects ? "text-4xl w-[200px] h-[200px] left-[38px] top-[38px]" : "text-3xl w-[175px] h-[175px] left-[50px] top-[50px]"}
            `}
          >
            <div
              className={`w-full h-full rounded-[10px] opacity-30
                ${hoveringProjects ? "bg-[radial-gradient(circle_at_center,_oklch(72.3%_0.219_149.579)_0%,_#032e15_100%)]" : "bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#030712_100%)]"}
              `}
            />
            <div className="z-50 absolute w-full flex justify-center items-center flex-col">
              <img className="w-[100px] h-[100px]" src={projectsSvg} alt="" />
              <p className="">PROJECTS</p>
            </div>
          </button>

          <button
            onMouseEnter={() => setHoveringAbout(true)}
            onMouseLeave={() => setHoveringAbout(false)}
            onClick={() => router.push(`/ABOUT`)}
            className={`absolute cursor-none text-center outline-[2px] rounded-[10px] text-gray-400 ease-in-out duration-350 bg-gray-950 flex items-center
              ${hoveringAbout ? "text-4xl w-[200px] h-[200px] left-[273px] top-[38px]" : "text-3xl w-[175px] h-[175px] left-[285px] top-[50px]"}
            `}
          >
            <div
              className={`w-full h-full rounded-[10px] opacity-30
                ${hoveringAbout ? "bg-[radial-gradient(circle_at_center,_oklch(72.3%_0.219_149.579)_0%,_#032e15_100%)]" : "bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#030712_100%)]"}
              `}
            />
            <p className="z-50 absolute w-full">ABOUT</p>
          </button>

          <button
            onMouseEnter={() => setHoveringContact(true)}
            onMouseLeave={() => setHoveringContact(false)}
            onClick={() => router.push(`/CONTACT`)}
            className={`absolute cursor-none text-center outline-[2px] rounded-[10px] text-gray-400 ease-in-out duration-350 bg-gray-950 flex items-center
              ${hoveringContact ? "text-4xl w-[200px] h-[200px] left-[508px] top-[38px]" : "text-3xl w-[175px] h-[175px] left-[520px] top-[50px]"}
            `}
          >
            <div
              className={`w-full h-full rounded-[10px] opacity-30
                ${hoveringContact ? "bg-[radial-gradient(circle_at_center,_oklch(72.3%_0.219_149.579)_0%,_#032e15_100%)]" : "bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#030712_100%)]"}
              `}
            />
            <p className="z-50 absolute w-full">CONTACT</p>
          </button>

          <button
            onMouseEnter={() => setHoveringRepo(true)}
            onMouseLeave={() => setHoveringRepo(false)}
            onClick={() => window.open("https://github.com/CharlesOrrDev/portfolio")}
            className={`absolute cursor-none text-center outline-[2px] rounded-[10px] text-gray-400 ease-in-out duration-350 bg-gray-950 flex items-center
              ${hoveringRepo ? "text-4xl w-[200px] h-[200px] left-[743px] top-[38px]" : "text-3xl w-[175px] h-[175px] left-[755px] top-[50px]"}
            `}
          >
            <div
              className={`w-full h-full rounded-[10px] opacity-30
                ${hoveringRepo ? "bg-[radial-gradient(circle_at_center,_oklch(72.3%_0.219_149.579)_0%,_#032e15_100%)]" : "bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#030712_100%)]"}
              `}
            />
            <p className="z-50 absolute w-full">REPO</p>
          </button>
        </div>

        <MouseFollowEffect mousePos={mousePos} isHovering={isHovering} windowDimensions={windowDimensions} hoveringEnter={false} hoveringProjects={hoveringProjects} hoveringAbout={hoveringAbout} hoveringContact={hoveringContact} hoveringRepo={hoveringRepo} />

      </div>
    </div>
  )
}

export default ApplicationButton