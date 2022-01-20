import React, { useState } from "react";

function CardNewTicket() {
  return (
    <div className="flex flex-col space-y-4 animated fadeIn faster  fixed  left-0 top-0 flex justify-center bg-gray-900/80 items-center inset-0 z-50 outline-none focus:outline-none ">
      <div className="w-[800px] h-[400px] flex flex-col p-8 bg-gray-200 shadow-md hover:shodow-lg rounded-2xl">
        <input
          className="text-xl rounded-xl p-4 mb-2"
          type="textarea"
          placeholder="Titre du ticket"
        ></input>
        <input
          className="text-xl rounded-xl p-4 mb-2 "
          type="textarea"
          placeholder="Description"
        ></input>
        <div className="flex">
          <label> Statut :</label>
          <select name="status" id="select-status">
            <option value="">En cours</option>
            <option value="">Code review</option>
            <option value="">Terminé</option>
          </select>
        </div>
        <div className="flex">
          <label> Membre assigné :</label>
          <select name="members" id="members-assigned">
            <option value="">John</option>
            <option value="">Jane</option>
            <option value="">Anne</option>
          </select>
        </div>
        <div className="flex-col text-center">
          <button
            type="submit"
            className="bg-indigo-900  my-3 hover:bg-purple-dark text-white font-bold py-1 px-4 rounded-3xl "
          >
            Créer
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardNewTicket;
