import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function CardNewTicket() {
  return (
    <div className="flex flex-col space-y-4 animated fadeIn faster  fixed  left-0 top-0 flex justify-center bg-gray-900/80 items-center inset-0 z-50 outline-none focus:outline-none ">
      <div className="w-[800px] h-auto flex flex-col py-4 px-6 bg-gray-200 shadow-md hover:shodow-lg rounded-2xl ">
          <button className="self-end ">
            <FontAwesomeIcon
              className="h-6 mb-2 fill-current text-purple-medium text-4xl "
              icon={faTimes}
              />
          </button>
        <form>
          <input
            className="text-xl rounded-xl p-4 mb-4"
            type="text"
            placeholder="Titre du ticket"
          ></input>
          <textarea
            className="h-[230px] text-xl rounded-xl p-4 mb-4"
            placeholder="Description"
          ></textarea>

          <div className="flex mb-2">
            <label className=" text-base font-bold"> Statut :</label>
            <select name="status" id="select-status" className="bg-white  ml-2">
              <option value="">En cours</option>
              <option value="">Code review</option>
              <option value="">Terminé</option>
            </select>
          </div>
          <div className="flex">
            <label className=" text-base font-bold"> Membre assigné :</label>
            <select
              name="members"
              id="members-assigned"
              className="bg-white  ml-2"
            >
              <option value="">John</option>
              <option value="">Jane</option>
              <option value="">Anne</option>
            </select>
          </div>
          <div className="flex-col text-center">
            <input
              type="submit"
              className="bg-indigo-900  my-3 hover:bg-purple-dark text-white font-bold py-1 px-4 rounded-3xl "
              value="Enregistrer"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardNewTicket;
