export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
}

export interface IMemberAssignee {
  memberId: number;
  firstName: string;
  lastName: string;
  email: string;
  assigneePicture: string;
}
