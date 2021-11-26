import React from "react";

export default function Cardticket() {
  return (
    <div className="flex-col mt-4 ">
      <div className="bg-white flex flex-col justify-items-stretch p-4 rounded-xl mb-4">
        <p className="text-l font-bold text-left">
          #21 Intégrer la barre de navigation dans la page home
        </p>
        <div className="flex content-between justify-around items-center">
          <div className="bg-yellow-500 rounded-full flex flex-shrink-0 items-center justify-center h-6 w-14 text-xs">
            front
          </div>
          <div className="flex items-end w-6 h-6">
            <img src="./img/berryPoint.png" />
            <img src="./img/berryPoint.png" />
          </div>

          <img src="./img/avatar_jane.png" className="h-[60px] w-[60px]" />
        </div>
      </div>
      <div className="bg-white flex flex-col justify-items-stretch p-6 rounded-xl">
        <p className="text-l font-bold text-left">
          #22 Implémenter mot de passe perdu
        </p>
        <div className="flex content-between justify-around items-center">
          <div className="bg-blue-800 rounded-full flex flex-shrink-0 items-center justify-center h-6 w-14 text-xs">
            back
          </div>

          <div className="flex items-end  w-6 h-6">
            <img src="./img/berryPoint.png" />
          </div>

          <img src="./img/avatar_anne.png" className="h-[60px] w-[60px]" />
        </div>
      </div>
    </div>
  );
}
