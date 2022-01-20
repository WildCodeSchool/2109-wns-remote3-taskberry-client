import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CardAddTicket() {
  return (
    <div className="w-full p-2 my-4 bg-white rounded-2xl flex-col flex-wrap hover:bg-sky-700">
      <a href="#" className="group block p-6 ">
        <div className="flex flex-column justify-around items-center space-x-3">
          <FontAwesomeIcon
            icon={faPlus}
            size="2x"
            className="stroke-sky-500 "
          />
          <h3 className="text-slate-900 text-sm font-semibold">
            Créer un nouveau ticket
          </h3>
        </div>
      </a>
    </div>
  );
}

export default CardAddTicket;
