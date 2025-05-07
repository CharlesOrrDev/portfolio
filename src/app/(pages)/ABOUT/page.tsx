import HomeMenuButtons from "@/app/Components/HomeMenuButtons";

export default function Home()
{
  const buttonArray = ["ENTER", "ABOUT", "CONTACT", "REPOSITORY"];

  return (
    // Surrounding Div START
    <div className="h-[100vh] bg-gray-950 text-white  flex flex-col justify-center items-center font-[CalSans] inset-shadow-[0_0_5rem_0.1em_rgba(30,30,30,1)]">

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


        <div className="col-start-1 row-start-1 w-[95%] h-full">
          {/* Home Page START */}
          <div className="flex flex-col h-full justify-center">

            {/* Home navigation buttons */}
            {
              buttonArray.map((buttonName, index) =>
              (
                <HomeMenuButtons key={index} buttonName={buttonName}/>
              ))
            }
            {/* Home navigation buttons */}

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