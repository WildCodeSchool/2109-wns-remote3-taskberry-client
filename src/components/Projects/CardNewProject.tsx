import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TICKET, GET_PROJECT_MEMBERS } from "../../GraphQL/API";
import { ProjectContext } from "../../providers/ProjectProvider";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue, Day } from "react-modern-calendar-datepicker";
import NewProjectForm from "./NewProjectForm";
import AuthContext from "../../store/auth-context";

const CardNewProject = (props: any): JSX.Element => {
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

  useEffect(() => {
    if (data && data.getProjectTickets) {
      setUsers(data.getProjectTickets);
    }
  }, [data]);
  useEffect(() => {
    if (membersData && membersData.getProjectUsers) {
      setMembers(membersData.getProjectUsers);
    }
  }, [membersData]);

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
        <NewProjectForm />
      </div>
    </div>
  );
};

export default CardNewProject;
