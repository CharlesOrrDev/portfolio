"use client"

import { useState } from "react";

export default function Home()
{
  const [isHoveringEnter, setIsHoveringEnter] = useState(false);

  const [isHoveringAbout, setIsHoveringAbout] = useState(false);

  const [isHoveringContact, setIsHoveringContact] = useState(false);

  const [isHoveringRepository, setIsHoveringRepository] = useState(false);

  return (
    // Surrounding Div START
    <div className="h-[100vh] bg-gray-950 text-white">

      {/* Home Page START */}
      <div className="grid gap-[20px] pt-[200px]">

        {/* Enter Site */}
        <div className={`${isHoveringEnter ? "ml-[25px] ease-in-out duration-250" : "ml-[50px] ease-in-out duration-250"}`}>
          <button onMouseEnter={() => setIsHoveringEnter(true)} onMouseLeave={() => setIsHoveringEnter(false)} className={`text-left cursor-pointer ${isHoveringEnter ? "w-full text-4xl border-y-2 ease-in-out duration-250" : "border-y w-[320px] ease-in-out duration-250 text-2xl"}`}>
            <p className="ml-[75px]">ENTER</p>
          </button>
        </div>
        {/* Enter Site */}

        {/* About Section */}
        <div className={`${isHoveringAbout ? "ml-[25px] ease-in-out duration-250" : "ml-[50px] ease-in-out duration-250"}`}>
          <button onMouseEnter={() => setIsHoveringAbout(true)} onMouseLeave={() => setIsHoveringAbout(false)} className={`text-left cursor-pointer ${isHoveringAbout ? "w-full text-4xl border-y-2 ease-in-out duration-250" : "border-y w-[20rem] ease-in-out duration-250 text-2xl"}`}>
            <p className="ml-[75px]">ABOUT</p>
          </button>
        </div>
        {/* About Section */}

        {/* Contact Me */}
        <div className={`${isHoveringContact ? "ml-[25px] ease-in-out duration-250" : "ml-[50px] ease-in-out duration-250"}`}>
          <button onMouseEnter={() => setIsHoveringContact(true)} onMouseLeave={() => setIsHoveringContact(false)} className={`text-left cursor-pointer ${isHoveringContact ? "w-full text-4xl border-y-2 ease-in-out duration-250" : "border-y w-[20rem] ease-in-out duration-250 text-2xl"}`}>
            <p className="ml-[75px]">CONTACT</p>
          </button>
        </div>
        {/* Contact Me */}

        {/* Repository Link */}
        <div className={`${isHoveringRepository ? "ml-[25px] ease-in-out duration-250" : "ml-[50px] ease-in-out duration-250"}`}>
          <button onMouseEnter={() => setIsHoveringRepository(true)} onMouseLeave={() => setIsHoveringRepository(false)} className={`text-left cursor-pointer ${isHoveringRepository ? "w-full text-4xl border-y-2 ease-in-out duration-250" : "border-y w-[20rem] ease-in-out duration-250 text-2xl"}`}>
            <p className="ml-[75px]">REPOSITORY</p>
          </button>
        </div>
        {/* Repository Link */}

      </div>
      {/* Home Page END */}

    </div>
    // Surrounding Div END
  );
}
