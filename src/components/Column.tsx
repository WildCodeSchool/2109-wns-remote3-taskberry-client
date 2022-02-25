import React, { FC } from "react";
import Cardticket from "./Cardticket";
import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import CardAddTicket from "./CardAddTicket";
import CardNewTicket from "./CardNewTicket";

const GET_PROJECT_TICKETS = gql`
  query Query($projectId: Float!) {
    getProjectTickets(projectId: $projectId) {
      id
      name
      description
      createdAt
      finishedAt
      projectId
      statusId
      assigneeId
    }
  }
`;

interface ColumnProps {
  label: string;
  statusId: number;
}
const Column: FC<ColumnProps> = ({ label, statusId }) => {
  const [newTicket, setNewTicket] = useState<boolean>(false);

  const [tickets, setTickets] = useState([]);
  const { data, loading, error } = useQuery(GET_PROJECT_TICKETS, {
    variables: { projectId: 2 },
  });

  useEffect(() => {
    if (data && data.getProjectTickets) {
      setTickets(data.getProjectTickets);
    }
  }, [data]);
  if (loading) return <span>Loading...</span>;
  if (error) return <div>`Error! ${error.message}`</div>;
  const avatares = [
    "",
    "./img/avatar_jane.png",
    "./img/avatar_john.png",
    "./img/avatar_anne.png",
    "./img/avatar_mark.png",
  ];

  return (
    <div className=" relative bg-gray-100 m-8 md:w-1/4 h-[800px] flex  flex-wrap  content-start 	 shadow-lg sm:rounded-3xl sm:p-2 ">
      <div className="absolute -right-3 -top-5 bg-purple-dark rounded-full flex justify-center items-center py-2 px-6 text-white font-bold sm:text-xl">
        {label}
      </div>
      {tickets.map((item: any) => {
        if (item.statusId === statusId) {
          return (
            <Cardticket
              key={item.id}
              assignee={avatares[item.assigneeId]}
              title={`#${item.id} ${item.name}`}
            ></Cardticket>
          );
        }
      })}

      {statusId == 1 ? (
        !newTicket ? (
          <div className="w-full " onClick={() => setNewTicket(true)}>
            <CardAddTicket />
          </div>
        ) : (
          <CardNewTicket setShow={setNewTicket} />
        )
      ) : (
        ""
      )}
    </div>
  );
};
export default Column;
