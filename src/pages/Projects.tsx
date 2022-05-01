import CardAddProject from "../components/Projects/CardAddProject";
import CardNewProject from "../components/Projects/CardNewProject";
import Cardproject from "../components/Projects/Cardproject";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../GraphQL/API";
import UserConnectedProfile from "../components/Profile/UserConnectedProfile";
import { Project } from "../models/ProjectConfig";

function Projects(): JSX.Element {
  const [newProject, setNewProject] = useState<boolean>(false);
  const [projects, setProjects] = useState([]);
  const { data: projectsData, loading, error } = useQuery(GET_PROJECTS);

  useEffect(() => {
    if (projectsData && projectsData.getProjects) {
      setProjects(projectsData.getProjects);
    }
  }, [projectsData]);

  const inProgressProject = projects.filter(
    (obj: Project) => obj.finishedAt === null
  );

  const finishedProject = projects.filter(
    (obj: Project) => obj.finishedAt !== null
  );

  return (
    <div className="w-full pl-[30px]">
      <UserConnectedProfile />
      <div className="flex flex-row justify-around items-center mt-8 ">
        <div className="relative w-[470px] h-[770px] flex align-end">
          <div className="rounded-full w-[125px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
            À faire
          </div>
          <div className="bg-gray-ligth w-[550px] max-h-[750px] rounded-2xl shadow-lg mt-5">
            <div className="max-h-[700px] mt-8 overflow-y-auto flex flex-col space-y-6 justify-start items-center ">
              {!newProject ? (
                <div>
                  <a onClick={() => setNewProject(true)}>
                    <CardAddProject />
                  </a>
                </div>
              ) : (
                <div>
                  <CardNewProject setShow={setNewProject} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="relative w-[470px] h-[770px] flex align-end">
          <div className="rounded-full w-[135px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
            En cours : {inProgressProject.length}
          </div>
          <div className="flex flex-col bg-gray-ligth w-[550px] max-h-[750px] rounded-2xl shadow-lg mt-5">
            <div className="max-h-[700px] mt-8 overflow-y-auto flex flex-col space-y-6 justify-start items-center">
              {inProgressProject &&
                inProgressProject.map((item: Project) => {
                  return (
                    <Cardproject
                      key={item.id}
                      idProject={parseInt(item.id)}
                      name={`#${item.id} ${item.name}`}
                      createdDate={item.createdAt}
                      finishedAt={item.finishedAt}
                      projectDetail={item.description}
                    ></Cardproject>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="relative w-[470px] h-[770px] flex align-end">
          <div className="rounded-full w-[135px] py-2 px-6 bg-purple-dark text-white absolute right-0 font-bold">
            Validé : {finishedProject.length}
          </div>
          <div className="flex flex-col bg-gray-ligth w-[550px] max-h-[750px] rounded-2xl shadow-lg mt-5">
            <div className="max-h-[700px] mt-8 overflow-y-auto flex flex-col space-y-6 justify-start items-center">
              {finishedProject &&
                finishedProject.map((item: Project) => {
                  return (
                    <Cardproject
                      key={item.id}
                      idProject={parseInt(item.id)}
                      name={`#${item.id} ${item.name}`}
                      createdDate={item.createdAt}
                      finishedAt={item.finishedAt}
                      projectDetail={item.description}
                    ></Cardproject>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
