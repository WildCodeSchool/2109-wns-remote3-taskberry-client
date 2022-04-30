import React, { FC, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_PROJECT_TICKETS, GET_PROJECT_MEMBERS } from "../../GraphQL/API";
import { toDateLongFormat, toDateObject } from "../../helpers/dates";
import { ProjectProps } from "../../models/ProjectConfig";
import MemberAssignee from "../MemberAssignee";
import { Member } from "../../models/MemberConfig";

export const Cardproject: FC<ProjectProps> = ({
  idProject,
  name,
  createdDate,
  finishedAt,
  projectDetail,
}) => {
  const formatCreatedDate = toDateObject(createdDate);
  const projectCreatedAt = toDateLongFormat(formatCreatedDate);
  const formatFinishedDate = toDateObject(finishedAt);
  const projectFinishedAt = toDateLongFormat(formatFinishedDate);
  const [tickets, setTickets] = useState([]);
  const [members, setMembers] = useState([]);

  const {
    data: ticketsData,
    loading,
    error,
  } = useQuery(GET_PROJECT_TICKETS, {
    variables: { projectId: idProject },
    // pollInterval: 500,
  });

  const { data: membersData } = useQuery(GET_PROJECT_MEMBERS, {
    variables: { projectId: idProject },
  });

  useEffect(() => {
    if (ticketsData && ticketsData.getProjectTickets) {
      setTickets(ticketsData.getProjectTickets);
    }
  }, [ticketsData]);

  useEffect(() => {
    if (membersData && membersData.getProjectUsers) {
      setMembers(membersData.getProjectUsers);
    }
  }, [membersData]);

  if (loading) return <span>Loading...</span>;
  if (error) return <div>{`Error! ${error.message}`}</div>;

  console.log("tickets", tickets);
  console.log("membersData", membersData);

  return (
    <div className="bg-white rounded-2xl h-[350px] w-[400px] flex">
      <div className="p-5">
        <div className="flex-col">
          <p className="text-xl text-left">{name}</p>
        </div>
        <div className="flex-col">
          <p className="text-xl text-left pb-2.5">{projectDetail}</p>
        </div>
        <hr className="py-1.5"></hr>
        <div className="flex-col">
          <p className="text-sm text-left mt-1">créé le : {projectCreatedAt}</p>
        </div>
        {projectFinishedAt && (
          <div className="flex-col">
            <p className="text-sm text-left mt-1">
              date de livraison le : {projectFinishedAt}
            </p>
          </div>
        )}
        <div className="flex-col">
          <p className="text-sm text-left mt-1">Chef de projet :</p>
          <img src="./img/avatar_jane.png" className="h-[60px] w-[60px]" />
        </div>
        <div className="flex-col">
          <p className="text-sm text-left mt-2">Equipe :</p>
          <div className="w-full flex-col">
            <div className=" bg-white flex flex-col p-4 rounded-xl mb-3">
              <div className="flex self-end justify-around items-center">
                {members.map((member: Member) => {
                  return (
                    <MemberAssignee
                      key={member.id}
                      memberId={parseInt(member.id)}
                      firstName={member.firstName}
                      lastName={member.lastName}
                      email={member.email}
                      assigneePicture={member.profilePicture}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardproject;
