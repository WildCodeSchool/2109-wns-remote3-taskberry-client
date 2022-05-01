import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TICKET, GET_PROJECT_MEMBERS } from "../../GraphQL/API";
import { ProjectContext } from "../../providers/ProjectProvider";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue, Day } from "react-modern-calendar-datepicker";

const NewProjectForm = (props: any): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<DayValue>(null);
  const [estimatedEnAt, setEstimatedEnAt] = useState<DayValue>(null);
  const [statusId, setStatusId] = useState<number>();
  const [assigneeId, setAssigneeId] = useState<number>();
  const [createTicket, { data, loading, error }] = useMutation(CREATE_TICKET);
  const [users, setUsers] = useState([]);
  const { projectId } = useContext(ProjectContext);
  const [members, setMembers] = useState([]);
  const { data: membersData } = useQuery(GET_PROJECT_MEMBERS, {
    variables: { projectId: 2 },
  });

  const submitHandler = (event: any) => {
    event.preventDefault();
  };

  return (
    <form className="flex flex-col" onSubmit={submitHandler}>
      <input
        className="text-xl rounded-xl p-4 mb-4"
        type="text"
        placeholder="Nom du projet"
        required
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
      ></input>
      <textarea
        className="h-[230px] text-xl rounded-xl p-4 mb-4"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.currentTarget.value);
        }}
      ></textarea>
      <div className="flex-col">
        <label className=" text-base font-bold"> Date de création</label>
        <DatePicker
          value={createdAt}
          onChange={setCreatedAt}
          colorPrimary="#4C16B6"
          inputPlaceholder="Created At"
        />
      </div>
      <div className="flex-col">
        <label className=" text-base font-bold">
          Date de livraison estimée
        </label>
        <DatePicker
          value={estimatedEnAt}
          onChange={setEstimatedEnAt}
          colorPrimary="#4C16B6"
          inputPlaceholder="Dead line"
        />
      </div>
      <div className="flex">
        <label className=" text-base font-bold"> Assigné :</label>
        <select
          name="members"
          id="members-assigned"
          className="bg-white  ml-2"
          required
          onChange={(e) => {
            const valueMembers = parseInt(e.currentTarget.value);
            setAssigneeId(valueMembers);
          }}
        >
          <option>Sélectionner </option>
          {members.map((item: any) => {
            return (
              <option key={item.id} value={item.id}>
                {`${item.firstName} ${item.lastName}`}
              </option>
            );
          })}
        </select>
      </div>
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
          <option>Sélectionner </option>
          <option value="1">À faire</option>
          <option value="2">En cours</option>
          <option value="3">Review</option>
          <option value="4">Terminé</option>
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
                  name: name,
                  description: description,
                  createdAt: new Date().toISOString(),
                  statusId: statusId,
                  projectId: 2,
                  assigneeId: assigneeId,
                },
              },
            })
          }
        ></input>
      </div>
    </form>
  );
};

export default NewProjectForm;
