import React, { FC, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_MEMBERS } from "../../GraphQL/API";
import MemberAssignee from "../MemberAssignee";
import { Member } from "../../models/MemberConfig";
import { TicketProps } from "../../models/TicketConfig";

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
                  memberId={parseInt(member.id)}
                  firstName={member.firstName}
                  lastName={member.lastName}
                  email={member.email}
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
