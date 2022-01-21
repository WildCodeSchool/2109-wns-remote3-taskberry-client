import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import CardAddProject from "../components/CardAddProject";
import CardNewProject from "../components/CardNewProject";
import Cardproject from "../components/Cardproject";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_PROJECT = gql`
  query Query($userId: Float!) {
    getUserProjects(userId: $userId) {
      id
      name
      estimateEndAt
    }
  }
`;

function Dashboard(): JSX.Element {
  const [newProject, setNewProject] = useState<boolean>(false);
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { userId: 1 },
  });
  // const { getUserProjects } = data;
  console.log(data);

  const userAvatar = "./img/avatar_jane.png";
  const team = [
    {
      avatar: "./img/avatar_anne.png",
    },
    {
      avatar: "./img/avatar_jane.png",
    },
    {
      avatar: "./img/avatar_john.png",
    },
  ];

  return (
    <div className="w-full pl-[30px]">
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
      <div className="w-[90%] flex justify-center sm:ml-[50px]">
        <div className="flex flex-nowrap  items-center overflow-x-auto h-full">
          <div className="relative w-[240px] h-[600px] lg:w-[370px] lg:h-[770px] flex align-end">
            <div className="rounded-full w-[125px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
              À faire
            </div>
            <div className="bg-gray-ligth w-[200px] max-h-[580px] lg:w-[350px] lg:max-h-[750px] rounded-2xl shadow-lg mt-5">
              <div className="max-h-[580px] lg:max-h-[700px] mt-8 overflow-y-auto flex flex-col space-y-6 justify-start items-center">
                {data &&
                  data.getUserProjects.map((card: any) => (
                    <div key={card.id}>
                      <Cardproject
                        {...card}
                        userAvatar={userAvatar}
                        team={team}
                      />
                    </div>
                  ))}

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
          <div className="relative w-[240px] h-[600px] lg:w-[370px] lg:h-[770px] flex align-end">
            <div className="rounded-full w-[125px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
              En cours
            </div>
            <div className="flex flex-col bg-gray-ligth w-[200px] max-h-[580px] lg:w-[350px] lg:max-h-[750px] rounded-2xl shadow-lg mt-5"></div>
          </div>
          <div className="relative w-[240px] h-[600px] lg:w-[370px] lg:h-[770px] flex align-end">
            <div className="rounded-full w-[125px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
              Validé
            </div>
            <div className="flex flex-col bg-gray-ligth w-[200px] max-h-[580px] lg:w-[350px] lg:max-h-[750px] rounded-2xl shadow-lg mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
