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
    <div className="h-[100vh] bg-gray-950 text-white  flex flex-col justify-center items-center font-[CalSans]">

      <div className="text-start w-full">
        <p className="ml-[7%]">191621529884337911328</p>
      </div>


      <div className="grid w-[88%] h-[80%]">
        <div className="col-start-1 row-start-1 grid">

          {/* Column One START */}
          <div className="col-start-1 row-start-1 flex justify-start items-start">
            <div className="bg-gradient-to-tl from-white via-gray-700 to-white w-[95%] h-[90%] pt-[1px] pl-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>
          
          <div className="col-start-1 row-start-2 flex items-center">
            <div className="bg-gradient-to-b from-gray-700 via-white to-gray-700 w-[95%] h-[90%] pl-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>

          <div className="col-start-1 row-start-3 flex justify-start items-end">
            <div className="bg-gradient-to-bl from-white via-gray-700 to-white w-[95%] h-[90%] pb-[1px] pl-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>
          {/* Column One END */}


          {/* Column Two START */}
          <div className="col-start-2 row-start-1 flex justify-center items-start">
            <div className="bg-gradient-to-r from-gray-700 via-white to-gray-700 w-[85%] h-[90%] pt-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>

          <div className="col-start-2 row-start-3 flex justify-center items-end">
            <div className="bg-gradient-to-r from-gray-700 via-white to-gray-700 w-[85%] h-[90%] pb-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>
          {/* Column Two END */}


          {/* Column Three START */}
          <div className="col-start-3 row-start-1 flex justify-center items-start">
            <div className="bg-gradient-to-r from-gray-700 via-white to-gray-700 w-[95%] h-[90%] pt-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>

          <div className="col-start-3 row-start-3 flex justify-center items-end">
            <div className="bg-gradient-to-r from-gray-700 via-white to-gray-700 w-[95%] h-[90%] pb-[1px] col-start-3 row-start-3">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>
          {/* Column Three END */}


          {/* Column Four START */}
          <div className="col-start-4 row-start-1 flex justify-center items-start">
            <div className="bg-gradient-to-r from-gray-700 via-white to-gray-700 w-[85%] h-[90%] pt-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>

          <div className="col-start-4 row-start-3 flex justify-center items-end">
            <div className="bg-gradient-to-r from-gray-700 via-white to-gray-700 w-[85%] h-[90%] pb-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>
          {/* Column Four END */}


          {/* Column Five START */}
          <div className="col-start-5 row-start-1 flex justify-end items-start">
            <div className="bg-gradient-to-tr from-white via-gray-700 to-white w-[95%] h-[90%] pt-[1px] pr-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>
          
          <div className="col-start-5 row-start-2 flex justify-end items-center">
            <div className="bg-gradient-to-b from-gray-700 via-white to-gray-700 w-[95%] h-[90%] pr-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>

          <div className="col-start-5 row-start-3 flex justify-end items-end">
            <div className="bg-gradient-to-br from-white via-gray-700 to-white w-[95%] h-[90%] pb-[1px] pr-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>
          {/* Column Five END */}

        </div>


        <div className="col-start-1 row-start-1 w-[95%] h-[100%]">
          {/* Home Page START */}
          <div className="grid gap-[20px] mt-[200px]">

            {/* Enter Site */}
            <div className={`
              ${isHoveringEnter ?
              "ml-[150px] ease-in-out duration-250" :
              "ml-[200px] ease-in-out duration-250"}
            `}>
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
            <div className={`
              ${isHoveringAbout ?
              "ml-[150px] ease-in-out duration-250" :
              "ml-[200px] ease-in-out duration-250"}
            `}>
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
            <div className={`
              ${isHoveringContact ?
              "ml-[150px] ease-in-out duration-250" :
              "ml-[200px] ease-in-out duration-250"}
            `}>
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
            <div className={`
              ${isHoveringRepository ?
              "ml-[150px] ease-in-out duration-250" :
              "ml-[200px] ease-in-out duration-250"}
            `}>
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
      </div>


      <div className="text-end w-full">
        <p className="mr-[7%]">191621529884337911328</p>
      </div>

    </div>
    // Surrounding Div END
  );
}
