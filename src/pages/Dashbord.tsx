import React from "react";
import Cardproject from "./Cardproject";

function Dashbord() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-around h-full items-center">
        <div className="relative w-[370px] h-[720px] flex align-end">
          <div className="rounded-full w-[125px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
            À faire
          </div>
          <div className="flex flex-col bg-gray-ligth w-[350px] h-[700px] rounded-2xl shadow-lg mt-5 justify-start items-center">
            <div className="mt-9">
              <Cardproject />
            </div>
          </div>
        </div>
        <div className="relative w-[370px] h-[720px] flex align-end">
          <div className="rounded-full w-[125px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
            En cours
          </div>
          <div className="flex flex-col bg-gray-ligth w-[350px] h-[700px] rounded-2xl shadow-lg mt-5"></div>
        </div>
        <div className="relative w-[370px] h-[720px] flex align-end">
          <div className="rounded-full w-[125px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
            Validé
          </div>
          <div className="flex flex-col bg-gray-ligth w-[350px] h-[700px] rounded-2xl shadow-lg mt-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
