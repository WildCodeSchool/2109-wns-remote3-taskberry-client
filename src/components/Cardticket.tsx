import React, { FC, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_PROJECT_MEMBERS } from "../GraphQL/API";
import MemberAssignee from "./MemberAssignee";

interface TicketProps {
  title: string;
  assigneeId: number;
}
export interface Member {
  id: number;
  profilePicture: string;
}
export const Cardticket: FC<TicketProps> = ({ title, assigneeId }) => {
  const [members, setMembers] = useState([]);
  const { data: membersData } = useQuery(GET_PROJECT_MEMBERS, {
    variables: { projectId: 2 },
  });
  useEffect(() => {
    if (membersData && membersData.getProjectUsers) {
      setMembers(membersData.getProjectUsers);
    }
  }, [membersData]);

  return (
    <div className="w-full flex-col">
      <div className=" bg-white flex flex-col p-4 rounded-xl mb-3">
        <p className="text-l font-bold text-left ">{title}</p>
        <div className="flex self-end justify-around items-center">
          {members.map((member: Member) => {
            return (
              assigneeId === Number(member.id) && (
                <MemberAssignee
                  key={member.id}
                  assigneePicture={member.profilePicture}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cardticket;
