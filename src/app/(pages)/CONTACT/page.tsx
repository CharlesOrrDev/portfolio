'use client'

import BackButton from "@/app/Components/BackButton";
import MeAndSteph2 from "/public/assets/MeAndSteph2.jpg"
import Image from "next/image";

export default function Contact()
{
  return (
    <>
      <BackButton />

      <div className="grid gap-[50px] justify-center items-center h-full w-full">

        {/* Personal Section */}
        <div className="col-start-1 row-start-1 grid items-center justify-center">
          <div className="outline-[5px] outline-white/85 rounded-full w-fit">
            <Image src={MeAndSteph2} alt="Me and my wife" width={200} height={200} style={{objectFit: "cover"}} className="rounded-full h-[200px] m-[6px]"/>
          </div>

          <div className="text-2xl text-center mt-[15px]">
            <p>Charles Orr</p>
          </div>
        </div>

        <div className="col-start-2 row-start-1 grid justify-center gap-[27px]">
          <div className="col-start-1 row-start-1">
            <p className="mr-[10px] text-2xl">Email :</p>
            <p className="text-xl mt-[4px] ml-[15px] opacity-85">- Chas2687@gmail.com</p>
          </div>

          <div className="col-start-1 row-start-2">
            <p className="mr-[10px] text-2xl">Phone :</p>
            <p className="text-xl mt-[4px] ml-[15px] opacity-85">- (209)-482-6484</p>
          </div>
          {/* Personal Section */}

          {/* Outside Links */}
          <div className="col-start-1 row-start-3">
            <p className="mr-[10px] text-2xl">LinkedIn :</p>
            <button onClick={() => window.open("https://www.linkedin.com/in/charles-orr-62a623358/")} className="text-xl mt-[4px] cursor-pointer ml-[15px] opacity-85">- https://www.linkedin.com/in/charles-orr-62a623358/</button>
          </div>

          <div className="col-start-2 row-start-1">
            <p className="mr-[10px] text-2xl">GitHub :</p>
            <button onClick={() => window.open("https://github.com/CharlesOrrDev")} className="text-xl mt-[4px] cursor-pointer ml-[15px] opacity-85">- https://github.com/CharlesOrrDev</button>
          </div>

          <div className="col-start-2 row-start-2">
            <p className="mr-[10px] text-2xl">Resume :</p>
            <button className="text-xl mt-[4px] cursor-pointer ml-[15px] opacity-85"><a href="/assets/CharlesOrrResume.pdf" download="CharlesOrrResume.pdf">- CharlesOrrResume.pdf</a></button>
          </div>
          {/* Outside Links */}
        </div>

      </div>
    </>
  );
}