import React, { FC, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  GET_PROJECT_TICKETS,
  GET_PROJECT_MEMBERS,
  LOGIN_USER,
} from "../../GraphQL/API";
import { toDateLongFormat, toDateObject } from "../../helpers/dates";
import { ProjectProps } from "../../models/ProjectConfig";
import MemberAssignee from "../MemberAssignee";
import { Member } from "../../models/MemberConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

  const { data: userData } = useQuery(LOGIN_USER, {
    variables: {
      email: "johnnyd@gmail.com",
      password: "Test123456",
    },
    // pollInterval: 500,
  });

  console.log("userData", userData);

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

  // console.log("tickets", tickets.length);
  // console.log("membersData", membersData);

  return (
    <div className="bg-white rounded-2xl h-[370px] w-[400px] flex">
      <div className="w-full rounded-2xl p-5">
        <div className="flex justify-between content-start py-0.5 mb-2 ">
          <div className="flex flex-col">
            <p className="text-xl text-left">{name}</p>
            <p className="text-lg text-left pb-1.5">{projectDetail}</p>
          </div>
          <p className="text-sm text-center  bg-gray-500 rounded-2xl px-3 py-3 ">
            {tickets.length}
            <p>Tickets</p>
          </p>
        </div>
        <hr className="py-1.5"></hr>
        <div className="flex justify-between content-start flex-nowrap">
          <div className="flex flex-col">
            <p className="text-sm text-left mt-1 mb-0.5 ">
              créé le :<p>{projectCreatedAt}</p>
            </p>
            {projectFinishedAt && (
              <p className="text-sm text-left mt-1 mb-2.5">
                date de livraison le : <p>{projectFinishedAt}</p>
              </p>
            )}
          </div>
          <div className="flex flex-col items-center content-center ">
            <p className="text-sm text-center">Chef de projet</p>
            <img src="./img/avatar_jane.png" className="h-[60px] w-[60px]" />
          </div>
        </div>
        <div className="flex-col">
          <p className="text-sm text-left mt-1 mb-1.5">Equipe :</p>
          <div className="w-full flex-col">
            <div className=" bg-yellow-800 flex flex-row p-2 rounded-xl mb-2 ">
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
        <div className="flex flex-row justify-start">
          <div className="mr-1.5">Consulter les informations</div>
          <FontAwesomeIcon
            className="h-6 mb-2 fill-current  "
            icon={faArrowRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Cardproject;
