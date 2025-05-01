"use client"

import { useState } from "react";

export default function Home()
{
  const [isHoveringEnter, setIsHoveringEnter] = useState(false);
  const [isHoveringAbout, setIsHoveringAbout] = useState(false);
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  const [isHoveringRepository, setIsHoveringRepository] = useState(false);

  const [isClickedEnter, setIsClickedEnter] = useState(false);
  const [isClickedAbout, setIsClickedAbout] = useState(false);
  const [isClickedContact, setIsClickedContact] = useState(false);
  const [isClickedRepository, setIsClickedRepository] = useState(false);

  return (
    // Surrounding Div START
    <div className="h-[100vh] bg-gray-950 text-white">

      {/* Home Page START */}
      <div className="grid gap-[20px] pt-[200px]">

        {/* Enter Site */}
        <div className={`${isHoveringEnter ? "ml-[25px] ease-in-out duration-250" : "ml-[50px] ease-in-out duration-250"}`}>
          <button
            onMouseEnter={() => setIsHoveringEnter(true)}
            onMouseLeave={() => setIsHoveringEnter(false)}
            onMouseDown={() => setIsClickedEnter(true)}
            onMouseUp={() => setIsClickedEnter(false)}
            className={`text-left cursor-pointer
              ${isHoveringEnter ?
              "w-full text-4xl ease-in-out duration-250 bg-gradient-to-r from-gray-700 from-[1%] via-white via-10% to-gray-700 to-[99%] py-[2px] rounded-[4px]" :
              "w-[320px] ease-in-out duration-250 text-2xl bg-gradient-to-r from-gray-700 from-[1%] via-white via-20% to-gray-700 to-[99%] py-[1px] rounded-[4px]"}
            `}>
            <p
              className={`pl-[75px] bg-gray-950
                ${isClickedEnter ?
                "ease-in-out duration-150 bg-gradient-to-r from-gray-300 from-[1%] via-gray-500 via-20% to-gray-300 to-[99%] text-gray-950" :
                ""}
              `}>ENTER</p>
          </button>
        </div>
        {/* Enter Site */}

        {/* About Section */}
        <div className={`${isHoveringAbout ? "ml-[25px] ease-in-out duration-250" : "ml-[50px] ease-in-out duration-250"}`}>
          <button
            onMouseEnter={() => setIsHoveringAbout(true)}
            onMouseLeave={() => setIsHoveringAbout(false)}
            onMouseDown={() => setIsClickedAbout(true)}
            onMouseUp={() => setIsClickedAbout(false)}
            className={`text-left cursor-pointer
              ${isHoveringAbout ?
              "w-full text-4xl ease-in-out duration-250 bg-gradient-to-r from-gray-700 from-[1%] via-white via-10% to-gray-700 to-[99%] py-[2px] rounded-[4px]" :
              "w-[320px] ease-in-out duration-250 text-2xl bg-gradient-to-r from-gray-700 from-[1%] via-white via-20% to-gray-700 to-[99%] py-[1px] rounded-[4px]"}
            `}>
            <p className={`pl-[75px] bg-gray-950
              ${isClickedAbout ?
              "ease-in-out duration-150 bg-gradient-to-r from-gray-300 from-[1%] via-gray-500 via-20% to-gray-300 to-[99%] text-gray-950" :
              ""}
            `}>ABOUT</p>
          </button>
        </div>
        {/* About Section */}

        {/* Contact Me */}
        <div className={`${isHoveringContact ? "ml-[25px] ease-in-out duration-250" : "ml-[50px] ease-in-out duration-250"}`}>
          <button
            onMouseEnter={() => setIsHoveringContact(true)}
            onMouseLeave={() => setIsHoveringContact(false)}
            onMouseDown={() => setIsClickedContact(true)}
            onMouseUp={() => setIsClickedContact(false)}
            className={`text-left cursor-pointer
              ${isHoveringContact ? "w-full text-4xl ease-in-out duration-250 bg-gradient-to-r from-gray-700 from-[1%] via-white via-10% to-gray-700 to-[99%] py-[2px] rounded-[4px]" :
              "w-[320px] ease-in-out duration-250 text-2xl bg-gradient-to-r from-gray-700 from-[1%] via-white via-20% to-gray-700 to-[99%] py-[1px] rounded-[4px]"}
            `}>
            <p className={`pl-[75px] bg-gray-950
              ${isClickedContact ?
              "ease-in-out duration-150 bg-gradient-to-r from-gray-300 from-[1%] via-gray-500 via-20% to-gray-300 to-[99%] text-gray-950" :
              ""}
            `}>CONTACT</p>
          </button>
        </div>
        {/* Contact Me */}

        {/* Repository Link */}
        <div className={`${isHoveringRepository ? "ml-[25px] ease-in-out duration-250" : "ml-[50px] ease-in-out duration-250"}`}>
          <button
            onMouseEnter={() => setIsHoveringRepository(true)}
            onMouseLeave={() => setIsHoveringRepository(false)}
            onMouseDown={() => setIsClickedRepository(true)}
            onMouseUp={() => setIsClickedRepository(false)}
            className={`text-left cursor-pointer
              ${isHoveringRepository ?
              "w-full text-4xl ease-in-out duration-250 bg-gradient-to-r from-gray-700 from-[1%] via-white via-10% to-gray-700 to-[99%] py-[2px] rounded-[4px]" :
              "w-[320px] ease-in-out duration-250 text-2xl bg-gradient-to-r from-gray-700 from-[1%] via-white via-20% to-gray-700 to-[99%] py-[1px] rounded-[4px]"}
            `}>
            <p className={`pl-[75px] bg-gray-950
              ${isClickedRepository ?
              "ease-in-out duration-150 bg-gradient-to-r from-gray-300 from-[1%] via-gray-500 via-20% to-gray-300 to-[99%] text-gray-950" :
              ""}  
            `}>REPOSITORY</p>
          </button>
        </div>
        {/* Repository Link */}

      </div>
      {/* Home Page END */}

    </div>
    // Surrounding Div END
  );
}
