'use client'

import MeAndSteph2 from "/public/assets/MeAndSteph2.jpg"
import Image from "next/image";

export default function Contact()
{
  return (
    <div className="grid justify-center items-center">

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
  );
}