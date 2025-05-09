'use client'

import MeAndSteph2 from "/public/assets/MeAndSteph2.jpg"
import Image from "next/image";

export default function Contact()
{
  return (
    // Surrounding Div START
    <div className="h-[100vh] pt-[50px] bg-gray-950 text-white  flex flex-col justify-center items-center font-[CalSans] inset-shadow-[0_0_5rem_0.1em_rgba(30,30,30,1)]">

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
            <div className="bg-gradient-to-b from-gray-700 via-white to-gray-700 w-[1px] h-[90%]"></div>
          </div>

          <div className="col-start-1 row-start-3 flex justify-start items-end">
            <div className="bg-gradient-to-bl from-white via-gray-700 to-white w-[95%] h-[90%] pb-[1px] pl-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>
          {/* Column One END */}


          {/* Column Two START */}
          <div className="col-start-2 row-start-1 flex justify-center items-start">
            <div className="bg-gradient-to-r from-gray-700 via-white to-gray-700 w-[95%] h-[1px]"></div>
          </div>

          <div className="col-start-2 row-start-3 flex justify-center items-end">
            <div className="bg-gradient-to-r from-gray-700 via-white to-gray-700 w-[95%] h-[1px]"></div>
          </div>
          {/* Column Two END */}


          {/* Column Three START */}
          <div className="col-start-3 row-start-1 flex justify-end items-start">
            <div className="bg-gradient-to-tr from-white via-gray-700 to-white w-[95%] h-[90%] pt-[1px] pr-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>
          
          <div className="col-start-3 row-start-2 flex justify-end items-center">
            <div className="bg-gradient-to-b from-gray-700 via-white to-gray-700 w-[1px] h-[90%]"></div>
          </div>

          <div className="col-start-3 row-start-3 flex justify-end items-end">
            <div className="bg-gradient-to-br from-white via-gray-700 to-white w-[95%] h-[90%] pb-[1px] pr-[1px]">
              <div className="bg-gray-950 w-full h-full"></div>
            </div>
          </div>
          {/* Column Three END */}

        </div>


        <div className="col-start-1 row-start-1 flex justify-center items-center">
          <div className="bg-gray-900 w-[99.95%] h-[99.7%] inset-shadow-[0_0_3rem_0.1em_rgba(35,35,35,1)]"></div>
        </div>


        <div className="col-start-1 row-start-1 w-[80%] h-[68%] m-auto">
          {/* Contact Page START */}
          <div className="grid h-full justify-between">
            

            {/* Personal Section */}
            <div className="row-start-1 col-start-1 grid">
              <div className="">
                <Image src={MeAndSteph2} alt="Me and my wife" width={200} height={200} style={{objectFit: "cover"}} className="rounded-full h-[200px]"/>
              </div>

              <div className="text-2xl">
                <p>Charles Orr</p>
              </div>

              <div className="flex">
                <p className="mr-[10px] text-2xl">Email :</p>
                <p className="text-xl mt-[4px]">Chas2687@gmail.com</p>
              </div>

              <div className="flex">
                <p className="mr-[10px] text-2xl">Phone :</p>
                <p className="text-xl mt-[4px]">(209)-482-6484</p>
              </div>
            </div>
            {/* Personal Section */}


            {/* Outside Links */}
            <div className="row-start-1 col-start-2 items-center">
              <div className="flex mb-[30px]">
                <p className="mr-[10px] text-2xl">LinkedIn :</p>
                <button onClick={() => window.open("https://www.linkedin.com/in/charles-orr-62a623358/")} className="text-xl mt-[4px] cursor-pointer">https://www.linkedin.com/in/charles-orr-62a623358/</button>
              </div>

              <div className="flex mb-[30px]">
                <p className="mr-[10px] text-2xl">GitHub :</p>
                <button onClick={() => window.open("https://github.com/CharlesOrrDev")} className="text-xl mt-[4px] cursor-pointer">https://github.com/CharlesOrrDev</button>
              </div>

              <div className="flex">
                <p className="mr-[10px] text-2xl">Resume :</p>
                <button className="text-xl mt-[4px] cursor-pointer"><a href="/assets/CharlesOrrResume.pdf" download="CharlesOrrResume.pdf">CharlesOrrResume.pdf</a></button>
              </div>
            </div>
            {/* Outside Links */}


          </div>
          {/* Contact Page END */}
        </div>

      </div>


      <div className="text-end w-full">
        <p className="mr-[7%]">191621529884337911328</p>
      </div>

    </div>
    // Surrounding Div END
  );
}