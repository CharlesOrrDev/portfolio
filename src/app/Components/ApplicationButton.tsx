'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

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
            <p className="z-50 absolute w-full">PROJECTS</p>
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

        <div
          id="MouseEffect"
          className={`absolute grid pointer-events-none transition-opacity duration-600 ${isHovering ? "opacity-100" : "opacity-0"}`}
          style={{ left: mousePos.x - (windowDimensions.width + 50), top: mousePos.y - (windowDimensions.height + 50), transform: "translate(0, 0)" }}
        >
          {/* Main Square */}
          <div
            className={`w-[50px] h-[50px] col-start-2 row-start-2 p-[2px] pr-[1px] pb-[1px] rounded-tl-full
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-tl from-green-500 via-green-950 to-green-500" : "bg-gradient-to-tl from-white via-gray-700 to-white"}
            `}
          >
            <div className="bg-gray-950 w-full h-full rounded-br-[5px] rounded-tl-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
          </div>

          <div
            className={`w-[50px] h-[50px] col-start-3 row-start-2 p-[2px] pl-[1px] pb-[1px] rounded-tr-full
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-tr from-green-500 via-green-950 to-green-500" : "bg-gradient-to-tr from-white via-gray-700 to-white"}
            `}
          >
            <div className="bg-gray-950 w-full h-full rounded-bl-[5px] rounded-tr-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
          </div>

          <div
            className={`w-[50px] h-[50px] col-start-2 row-start-3 p-[2px] pr-[1px] pt-[1px] rounded-bl-full
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-bl from-green-500 via-green-950 to-green-500" : "bg-gradient-to-bl from-white via-gray-700 to-white"}
            `}
          >
            <div className="bg-gray-950 w-full h-full rounded-tr-[5px] rounded-bl-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
          </div>

          <div
            className={`w-[50px] h-[50px] col-start-3 row-start-3 p-[2px] pl-[1px] pt-[1px] rounded-br-full
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-br from-green-500 via-green-950 to-green-500" : "bg-gradient-to-br from-white via-gray-700 to-white"}
            `}
          >
            <div className="bg-gray-950 w-full h-full rounded-tl-[5px] rounded-br-[100px] inset-shadow-[0_0_0.5rem_0.2em_rgba(30,30,30,1)]"/>
          </div>
          {/* Main Square */}


          {/* Left/Right Lines */}
          <div
            className={`w-[100vw] h-[1px] self-end col-start-1 row-start-2
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-r from-green-950 via-green-500 to-green-950" : "bg-gradient-to-r from-gray-700 via-gray-50 to-gray-700"}
            `}
          />

          <div
            className={`w-[100vw] h-[1px] self-end col-start-4 row-start-2
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-l from-green-950 via-green-500 to-green-950" : "bg-gradient-to-l from-gray-700 via-gray-50 to-gray-700"}
            `}
          />

          <div
            className={`w-[100vw] h-[1px] col-start-1 row-start-3
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-r from-green-950 via-green-500 to-green-950" : "bg-gradient-to-r from-gray-700 via-gray-50 to-gray-700"}
            `}
          />

          <div
            className={`w-[100vw] h-[1px] col-start-4 row-start-3
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-l from-green-950 via-green-500 to-green-950" : "bg-gradient-to-l from-gray-700 via-gray-50 to-gray-700"}
            `}
          />
          {/* Left/Right Lines */}


          {/* Top/Bottom Lines */}
          <div
            className={`w-[1px] h-[100vh] ml-[49px] col-start-2 row-start-1
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-b from-green-950 via-green-500 to-green-950" : "bg-gradient-to-b from-gray-700 via-gray-50 to-gray-700"}
            `}
          />

          <div
            className={`w-[1px] h-[100vh] col-start-3 row-start-1
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-b from-green-950 via-green-500 to-green-950" : "bg-gradient-to-b from-gray-700 via-gray-50 to-gray-700"}
            `}
          />

          <div
            className={`w-[1px] h-[100vh] col-start-2 row-start-4 ml-[49px]
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-t from-green-950 via-green-500 to-green-950" : "bg-gradient-to-t from-gray-700 via-gray-50 to-gray-700"}
            `}
          />

          <div
            className={`w-[1px] h-[100vh] col-start-3 row-start-4
              ${hoveringProjects || hoveringAbout || hoveringContact || hoveringRepo ? "bg-gradient-to-t from-green-950 via-green-500 to-green-950" : "bg-gradient-to-t from-gray-700 via-gray-50 to-gray-700"}
            `}
          />
          {/* Top/Bottom Lines */}

        </div>
      </div>
    </div>
  )
}

export default ApplicationButton