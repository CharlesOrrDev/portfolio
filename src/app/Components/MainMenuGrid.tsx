'use client'

import React from 'react'

interface Iprops
{
  rowName: string
}

const MainMenuGrid = ({rowName}: Iprops) =>
{
  return (
    <>

      {/* Box One */}
      <div
        className={`
          ${rowName == "One" ? "col-start-1 row-start-1 grid" : ""}
          ${rowName == "Two" ? "col-start-1 row-start-2 grid" : ""}
          ${rowName == "Three" ? "col-start-1 row-start-3 grid" : ""}
        `}>
        <div
          className={`
            ${rowName == "One" ? "bg-gray-950 bg-gradient-to-tl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-1" : ""}
            ${rowName == "Two" || "Three" ? "bg-gray-950 bg-gradient-to-tl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-1 pt-[2px]" : ""}
          `}
        >
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" ? "bg-gray-950 bg-gradient-to-tr from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-1 pr-[2px]" : ""}
            ${rowName == "Two" || "Three" ? "bg-gray-950 bg-gradient-to-tr from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-1 pt-[2px] pr-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" || "Two" ? "bg-gray-950 bg-gradient-to-bl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-2 pb-[2px]" : ""}
            ${rowName == "Three" ? "bg-gray-950 bg-gradient-to-bl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-2" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" || "Two" ? "bg-gray-950 bg-gradient-to-br from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-2 pb-[2px] pr-[2px]" : ""}
            ${rowName == "Three" ? "bg-gray-950 bg-gradient-to-br from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-2 pr-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>
      </div>
      {/* Box One */}


      {/* Box Two */}
      <div
        className={`
          ${rowName == "One" ? "col-start-2 row-start-1 grid" : ""}
          ${rowName == "Two" ? "col-start-2 row-start-2 grid" : ""}
          ${rowName == "Three" ? "col-start-2 row-start-3 grid" : ""}
        `}>
        <div
          className={`
            ${rowName == "One" ? "bg-gray-950 bg-gradient-to-tl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-1 pl-[2px]" : ""}
            ${rowName == "Two" || "Three" ? "bg-gray-950 bg-gradient-to-tl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-1 pt-[2px] pl-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" ? "bg-gray-950 bg-gradient-to-tr from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-1 pr-[2px]" : ""}
            ${rowName == "Two" || "Three" ? "bg-gray-950 bg-gradient-to-tr from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-1 pt-[2px] pr-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" || "Two" ? "bg-gray-950 bg-gradient-to-bl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-2 pb-[2px] pl-[2px]" : ""}
            ${rowName == "Three" ? "bg-gray-950 bg-gradient-to-bl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-2 pl-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" || "Two" ? "bg-gray-950 bg-gradient-to-br from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-2 pb-[2px] pr-[2px]" : ""}
            ${rowName == "Three" ? "bg-gray-950 bg-gradient-to-br from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-2 pr-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>
      </div>
      {/* Box Two */}


      {/* Box Three */}
      <div
        className={`
          ${rowName == "One" ? "col-start-3 row-start-1 grid" : ""}
          ${rowName == "Two" ? "col-start-3 row-start-2 grid" : ""}
          ${rowName == "Three" ? "col-start-3 row-start-3 grid" : ""}
        `}>
        <div
          className={`
            ${rowName == "One" ? "bg-gray-950 bg-gradient-to-tl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-1 pl-[2px]" : ""}
            ${rowName == "Two" || "Three" ? "bg-gray-950 bg-gradient-to-tl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-1 pt-[2px] pl-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" ? "bg-gray-950 bg-gradient-to-tr from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-1 pr-[2px]" : ""}
            ${rowName == "Two" || "Three" ? "bg-gray-950 bg-gradient-to-tr from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-1 pt-[2px] pr-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" || "Two" ? "bg-gray-950 bg-gradient-to-bl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-2 pb-[2px] pl-[2px]" : ""}
            ${rowName == "Three" ? "bg-gray-950 bg-gradient-to-bl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-2 pl-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" || "Two" ? "bg-gray-950 bg-gradient-to-br from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-2 pb-[2px] pr-[2px]" : ""}
            ${rowName == "Three" ? "bg-gray-950 bg-gradient-to-br from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-2 pr-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>
      </div>
      {/* Box Three */}
      

      {/* Box Four */}
      <div
        className={`
          ${rowName == "One" ? "col-start-4 row-start-1 grid" : ""}
          ${rowName == "Two" ? "col-start-4 row-start-2 grid" : ""}
          ${rowName == "Three" ? "col-start-4 row-start-3 grid" : ""}
        `}>
        <div
          className={`
            ${rowName == "One" ? "bg-gray-950 bg-gradient-to-tl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-1 pl-[2px]" : ""}
            ${rowName == "Two" || "Three" ? "bg-gray-950 bg-gradient-to-tl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-1 pt-[2px] pl-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" ? "bg-gray-950 bg-gradient-to-tr from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-1 pr-[2px]" : ""}
            ${rowName == "Two" || "Three" ? "bg-gray-950 bg-gradient-to-tr from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-1 pt-[2px] pr-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" || "Two" ? "bg-gray-950 bg-gradient-to-bl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-2 pb-[2px] pl-[2px]" : ""}
            ${rowName == "Three" ? "bg-gray-950 bg-gradient-to-bl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-2 pl-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" || "Two" ? "bg-gray-950 bg-gradient-to-br from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-2 pb-[2px] pr-[2px]" : ""}
            ${rowName == "Three" ? "bg-gray-950 bg-gradient-to-br from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-2 pr-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>
      </div>
      {/* Box Four */}


      {/* Box Five */}
      <div
        className={`
          ${rowName == "One" ? "col-start-5 row-start-1 grid" : ""}
          ${rowName == "Two" ? "col-start-5 row-start-2 grid" : ""}
          ${rowName == "Three" ? "col-start-5 row-start-3 grid" : ""}
        `}>
        <div
          className={`
            ${rowName == "One" ? "bg-gray-950 bg-gradient-to-tl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-1 pl-[2px]" : ""}
            ${rowName == "Two" || "Three" ? "bg-gray-950 bg-gradient-to-tl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-1 pt-[2px] pl-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" ? "bg-gray-950 bg-gradient-to-tr from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-1" : ""}
            ${rowName == "Two" || "Three" ? "bg-gray-950 bg-gradient-to-tr from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-1 pt-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" || "Two" ? "bg-gray-950 bg-gradient-to-bl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-2 pb-[2px] pl-[2px]" : ""}
            ${rowName == "Three" ? "bg-gray-950 bg-gradient-to-bl from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-1 row-start-2 pl-[2px]" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>

        <div
          className={`
            ${rowName == "One" || "Two" ? "bg-gray-950 bg-gradient-to-br from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-2 pb-[2px]" : ""}
            ${rowName == "Three" ? "bg-gray-950 bg-gradient-to-br from-gray-700/40 via-gray-400/40 to-gray-700/40 col-start-2 row-start-2" : ""}
          `}>
          <div className="bg-gray-950 w-full h-full"/>
        </div>
      </div>
      {/* Box Five */}

    </>
  )
}

export default MainMenuGrid