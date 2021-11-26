import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function CardAddTicket() {
  return (
    <div className="w-full p-2 my-4 bg-white rounded-2xl flex-col flex-wrap  ">
      <p className="text-xl text-center p-4">Créer un nouveau ticket</p>
      <FontAwesomeIcon icon={faPlus} size="3x" />
    </div>
  );
}

export default CardAddTicket;
