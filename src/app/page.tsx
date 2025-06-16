import EnterButton from "./Components/EnterButton";
import MainMenuGrid from "./Components/MainMenuGrid";

export default function Home()
{
  return (
    <div className="h-[100vh] bg-gray-950 text-white flex flex-col justify-center items-center font-[CalSans] inset-shadow-[0_0_5rem_0.1em_rgba(30,30,30,1)]">

      <div className="text-start w-[86%]">
        <p>191621529884337911328</p>
      </div>


      <div className="grid w-[88%] h-[80%]">
        <div className="col-start-1 row-start-1 grid">

          {/* Column One START */}
          <div className="col-start-1 row-start-1 flex justify-start items-start">
            <div className="bg-gradient-to-tl from-white via-gray-700 to-white w-[95%] h-[90%] rounded-[10%] rounded-tl-[3px]"/>
          </div>
          
          <div className="col-start-1 row-start-2 flex items-center">
            <div className="bg-gradient-to-b from-gray-700 via-white to-gray-700 w-[95%] h-[90%] rounded-[10%]"/>
          </div>

          <div className="col-start-1 row-start-3 flex justify-start items-end">
            <div className="bg-gradient-to-bl from-white via-gray-700 to-white w-[95%] h-[90%] rounded-[10%] rounded-bl-[3px]"/>
          </div>
          {/* Column One END */}


          {/* Column Two START */}
          <div className="col-start-2 row-start-1 flex justify-center items-start">
            <div className="bg-gradient-to-r from-gray-700 via-white to-gray-700 w-[95%] h-[90%] rounded-[10%]"/>
          </div>

          <div className="col-start-2 row-start-3 flex justify-center items-end">
            <div className="bg-gradient-to-r from-gray-700 via-white to-gray-700 w-[95%] h-[90%] rounded-[10%]"/>
          </div>
          {/* Column Two END */}


          {/* Column Three START */}
          <div className="col-start-3 row-start-1 flex justify-end items-start">
            <div className="bg-gradient-to-tr from-white via-gray-700 to-white w-[95%] h-[90%] rounded-[10%] rounded-tr-[3px]"/>
          </div>
          
          <div className="col-start-3 row-start-2 flex justify-end items-center">
            <div className="bg-gradient-to-b from-gray-700 via-white to-gray-700 w-[95%] h-[90%] rounded-[10%]"/>
          </div>

          <div className="col-start-3 row-start-3 flex justify-end items-end">
            <div className="bg-gradient-to-br from-white via-gray-700 to-white w-[95%] h-[90%] rounded-[10%] rounded-br-[3px]"/>
          </div>
          {/* Column Three END */}

        </div>


        {/* Background Grid */}
        <div className="col-start-1 row-start-1 flex justify-center items-center">
          <div className="w-[99.5%] h-[99.1%] shadow-[0_0_3rem_0.1em_rgba(35,35,35,1)] outline-[2px] outline-gray-600 rounded-[2px]">
            <div className="grid w-full h-full">

              {/* Row One */}
              <MainMenuGrid rowName="One"/>
              {/* Row One */}

              {/* Row Two */}
              <MainMenuGrid rowName="Two" />
              {/* Row Two */}

              {/* Row Three */}
              <MainMenuGrid rowName="Three" />
              {/* Row Three */}

            </div>
          </div>
        </div>
        {/* Background Grid */}


        <div className="col-start-1 row-start-1 w-full h-full">
          {/* Home Page START */}
          <div className="w-full h-full">

            <EnterButton />

          </div>
          {/* Home Page END */}
        </div>
      </div>


      <div className="text-end w-[86%]">
        <p>191621529884337911328</p>
      </div>

    </div>
  );
}