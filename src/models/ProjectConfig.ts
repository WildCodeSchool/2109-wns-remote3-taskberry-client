export interface Project {
  id: string;
  idProject: number;
  name: string;
  description: string;
  finishedAt: Date;
  estimateEndAt: Date;
  createdAt: Date;
}

export interface ProjectProps {
  idProject: number;
  name: string;
  createdDate: Date;
  finishedAt: Date;
  projectDetail: string;
}
