import React from "react";

function Cardproject() {
  return (
    <div className="bg-white rounded-2xl h-[250px] w-[290px] flex">
      <div className="p-5">
        <div className="flex-col">
          <p className="text-xl text-left">Projet Express</p>
        </div>
        <div className="flex-col">
          <p className="text-sm text-left mt-1">Date: 10/01/2021</p>
        </div>
        <div className="flex-col">
          <p className="text-sm text-left mt-1">Chef de projet :</p>
          <img src="./img/avatar_jane.png" className="h-[60px] w-[60px]" />
        </div>
        <div className="flex-col">
          <p className="text-sm text-left mt-2">Equipe :</p>
          <div className="flex flex-row">
            <img src="./img/avatar_anne.png" className="h-1/5 w-1/5" />
            <img src="./img/avatar_jane.png" className="h-1/5 w-1/5" />
            <img src="./img/avatar_john.png" className="h-1/5 w-1/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardproject;
