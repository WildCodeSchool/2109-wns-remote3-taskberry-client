import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { gql, useMutation, useQuery } from "@apollo/client";

const GET_PROJECT_USERS = gql`
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

const CREATE_TICKET = gql`
  mutation Mutation($ticketInput: TicketInput!) {
    createTicket(ticketInput: $ticketInput) {
      id
      name
      description
      createdAt
      projectId
      assigneeId
      statusId
    }
  }
`;

function CardNewTicket(props: any): JSX.Element {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [statusId, setStatusId] = useState<number>();
  const [createTicket, { data, loading, error }] = useMutation(CREATE_TICKET);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data && data.getProjectTickets) {
      setUsers(data.getProjectTickets);
    }
  }, [data]);
  if (loading) return <span>Loading...</span>;
  if (error) return <div>`Error! ${error.message}`</div>;
  return (
    <div className="space-y-4 animated fadeIn faster  fixed  left-0 top-0 flex justify-center bg-gray-900/80 items-center inset-0 z-50 outline-none focus:outline-none ">
      <div className="w-[800px] h-auto flex flex-col py-4 px-6 bg-gray-200 shadow-md hover:shodow-lg rounded-2xl ">
        <button className="self-end ">
          <FontAwesomeIcon
            onClick={() => props.setShow(false)}
            className="h-6 mb-2 fill-current text-purple-medium text-4xl "
            icon={faTimes}
          />
        </button>
        <form className="flex flex-col">
          <input
            className="text-xl rounded-xl p-4 mb-4"
            type="text"
            placeholder="Titre du ticket"
            required
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          ></input>
          <textarea
            className="h-[230px] text-xl rounded-xl p-4 mb-4"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.currentTarget.value);
            }}
          ></textarea>

          <div className="flex mb-2">
            <label className=" text-base font-bold"> Statut :</label>
            <select
              name="status"
              id="select-status"
              className="bg-white  ml-2"
              required
              onChange={(e) => {
                const valueStatus = parseInt(e.currentTarget.value);
                setStatusId(valueStatus);
              }}
            >
              <option value="1">À faire</option>
              <option value="2">En cours</option>
              <option value="3">Review</option>
              <option value="4">Terminé</option>
            </select>
          </div>
          <div className="flex">
            <label className=" text-base font-bold"> Membre assigné :</label>
            <select
              name="members"
              id="members-assigned"
              className="bg-white  ml-2"
              required
              onChange={(e) => {
                const valueMembers = parseInt(e.currentTarget.value);
                setStatusId(valueMembers);
              }}
            >
              <option value="1">John</option>
              <option value="2">Jane</option>
              <option value="3">Anne</option>
              <option value="4">Mark</option>
            </select>
          </div>
          <div className="flex-col text-center">
            <input
              className="bg-indigo-900  my-3 hover:bg-purple-dark text-white font-bold py-1 rounded-3xl text-center"
              value="Enregistrer"
              onClick={() =>
                createTicket({
                  variables: {
                    ticketInput: {
                      name: title,
                      description: description,
                      createdAt: new Date().toISOString(),
                      statusId: statusId,
                      projectId: 2,
                      assigneeId: 1,
                    },
                  },
                })
              }
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardNewTicket;
