import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CardAddProject() {
  return (
    <div className="bg-white rounded-2xl h-[170px] w-[290px] flex">
      <div className="p-5 w-full space-y-6">
        <div className="flex-col">
          <p className="text-xl text-center">Nouveau projet</p>
        </div>
        <div className="flex-col">
          <FontAwesomeIcon icon={faPlus} size="5x" className="block mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default CardAddProject;
