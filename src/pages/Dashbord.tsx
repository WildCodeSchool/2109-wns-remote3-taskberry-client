import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import CardAddProject from "../components/CardAddProject";
import CardNewProject from "../components/CardNewProject";
import Cardproject from "../components/Cardproject";
import { useState } from "react";

function Dashbord(): JSX.Element {
  const [newProject, setNewProject] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="flex flex-row justify-end mr-10 mt-2">
        <div className="flex flex-row items-center">
          <FontAwesomeIcon
            className="fill-current text-purple-medium text-4xl mr-8"
            icon={faBell}
          />
          <img className="w-[55px] block my-auto" src="./img/avatar_jane.png" />
          <p>Jane Doe</p>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center mt-8">
        <div className="relative w-[370px] h-[770px] flex align-end">
          <div className="rounded-full w-[125px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
            À faire
          </div>
          <div className="bg-gray-ligth w-[350px] max-h-[750px] rounded-2xl shadow-lg mt-5">
            <div className="max-h-[700px] mt-8 overflow-y-auto flex flex-col space-y-6 justify-start items-center">
              <div>
                <Cardproject />
              </div>
              <div>
                <Cardproject />
              </div>
              {!newProject ? (
                <div>
                  <a onClick={() => setNewProject(true)}>
                    <CardAddProject />
                  </a>
                </div>
              ) : (
                <div>
                  <CardNewProject />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="relative w-[370px] h-[770px] flex align-end">
          <div className="rounded-full w-[125px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
            En cours
          </div>
          <div className="flex flex-col bg-gray-ligth w-[350px] max-h-[750px] rounded-2xl shadow-lg mt-5"></div>
        </div>
        <div className="relative w-[370px] h-[770px] flex align-end">
          <div className="rounded-full w-[125px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
            Validé
          </div>
          <div className="flex flex-col bg-gray-ligth w-[350px] max-h-[750px] rounded-2xl shadow-lg mt-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
