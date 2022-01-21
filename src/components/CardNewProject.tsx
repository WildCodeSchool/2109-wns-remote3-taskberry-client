import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue, Day } from "react-modern-calendar-datepicker";
import { gql, useMutation } from "@apollo/client";

const CREATE_PROJECT = gql`
  mutation Mutation($projectInput: ProjectInput!) {
    createProject(projectInput: $projectInput) {
      id
      name
      description
      createdAt
      estimateEndAt
    }
  }
`;

function CardNewProject(): JSX.Element {
  const [day, setDay] = useState<DayValue>(null);
  const [title, setTitle] = useState("");

  const [createProject, { data, loading, error }] = useMutation(CREATE_PROJECT);

  // const submit = async () => {
  //   const post = await axios.post("http://localhost:4000/", {
  // query: {
  //   name: title,
  //   description: "lorem ipsum",
  //   createdAt: new Date().toISOString(),
  //   estimateEndAt: new Date().toISOString(),
  //   UsersInProject: {
  //     userId: 1,
  //     roleId: 1,
  //   },
  // },
  //   });
  //   return post;
  // };
  return (
    <div className="bg-white rounded-2xl h-[200px] w-[290px] flex">
      <div className="p-5 w-full space-y-6">
        <div className="flex-col border-b border-gray-500 py-2 w-[150px]">
          <input
            className="text-xl appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-transparent"
            type="text"
            placeholder="Titre du projet"
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          ></input>
        </div>
        <div className="flex-col">
          <DatePicker
            value={day}
            onChange={setDay}
            colorPrimary="#4C16B6"
            inputPlaceholder="Dead line"
          />
        </div>
        <div className="flex-col text-center">
          <button
            className="bg-purple-medium hover:bg-purple-medium text-white font-bold py-1 px-4 rounded"
            onClick={() =>
              createProject({
                variables: {
                  projectInput: {
                    name: title,
                    description: "lorem ipsum",
                    createdAt: new Date().toISOString(),
                    estimateEndAt: new Date().toISOString(),
                    UsersInProject: {
                      userId: 1,
                      roleId: 1,
                    },
                  },
                },
              })
            }
          >
            Créer
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardNewProject;
