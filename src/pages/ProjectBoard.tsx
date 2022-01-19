import React from "react";
import CardAddTicket from "../components/CardAddTicket";
import Cardticket from "./Cardticket";

const ProjectBoard = () => {
  return (
    <div className="w-screen  px-10 bg-white md:flex  items-end mb-16 ">
      <div className=" relative bg-gray-100 m-8 md:w-1/4 h-4/5 flex  flex-wrap  shadow-lg sm:rounded-3xl sm:p-4 p-5">
        <div className="absolute -right-3 -top-3 bg-purple-dark rounded-full flex justify-center items-center py-2 px-6 text-white font-bold sm:text-xl">
          À faire
        </div>
        <Cardticket />
        <CardAddTicket />
      </div>
      <div className=" relative bg-gray-100 m-8 md:w-1/4 h-4/5 flex  flex-wrap  shadow-lg sm:rounded-3xl sm:p-20 ">
        <div className="absolute -right-3 -top-3 bg-purple-dark rounded-full flex justify-center items-center py-2 px-6 text-white font-bold sm:text-xl">
          En cours
        </div>
      </div>
      <div className=" relative bg-gray-100 m-8 md:w-1/4 h-4/5 flex  flex-wrap  shadow-lg sm:rounded-3xl sm:p-20 ">
        <div className="absolute -right-3 -top-3 bg-purple-dark rounded-full flex justify-center items-center py-2 px-6 text-white font-bold sm:text-xl">
          Review
        </div>
      </div>
      <div className=" relative bg-gray-100 m-8 md:w-1/4 h-4/5 flex  flex-wrap  shadow-lg sm:rounded-3xl sm:p-20 ">
        <div className="absolute -right-3 -top-3 bg-purple-dark rounded-full flex justify-center items-center py-2 px-6 text-white font-bold sm:text-xl">
          Terminé
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
