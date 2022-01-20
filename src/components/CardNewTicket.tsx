import React, { useState } from "react";

function CardNewTicket() {
  return (
    <div className="w-full p-2 my-4 bg-white rounded-2xl flex-col flex-wrap">
      <div className="flex-col border-b border-gray-500 py-2 w-[150px]">
        <input
          className="text-xl appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-transparent"
          type="text"
          placeholder="Titre du ticket"
        ></input>
      </div>

      <div className="flex-col text-center">
        <button className="bg-indigo-900  my-3 hover:bg-purple-dark text-white font-bold py-1 px-4 rounded-3xl ">
          Créer
        </button>
      </div>
    </div>
  );
}

export default CardNewTicket;
