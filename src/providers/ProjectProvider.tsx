import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_PROJECTS } from "../GraphQL/API";

interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  finishedAt?: string;
  estimateEndAt?: string;
}

interface IProjectContext {
  projects: Project[] | [] | null;
  projectId: number | null;
  setProjectId: Dispatch<SetStateAction<number | null>>;
}

const defaultContextValues: IProjectContext = {
  projects: null,
  projectId: null,
  setProjectId: () => {},
};

export const ProjectContext =
  createContext<IProjectContext>(defaultContextValues);

export const ProjectProvider: FC<{ children: any }> = ({ children }: any) => {
  const [projects, setProjects] = useState(null);
  const [projectId, setProjectId] = useState<number | null>(null);

  const { error, data } = useQuery(GET_USER_PROJECTS, {
    variables: {
      userId: 1,
    },
  });

  useEffect(() => {
    if (data) {
      const { getUserProjects } = data;
      setProjects(getUserProjects);
    }
    if (error) {
      throw new Error(error.message);
    }
  }, [data, error]);

  return (
    <ProjectContext.Provider value={{ projects, projectId, setProjectId }}>
      {children}
    </ProjectContext.Provider>
  );
};
