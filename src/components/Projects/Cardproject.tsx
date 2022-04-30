import React, { FC, useEffect, useState } from "react";

import { toDateLongFormat, toDateObject } from "../../helpers/dates";

interface ProjectProps {
  name: string;
  createdDate: Date;
  finishedAt: Date;
  projectDetail: string;
}
export const Cardproject: FC<ProjectProps> = ({
  name,
  createdDate,
  finishedAt,
  projectDetail,
}) => {
  const formatCreatedDate = toDateObject(createdDate);
  const projectCreatedAt = toDateLongFormat(formatCreatedDate);
  const formatFinishedDate = toDateObject(finishedAt);
  const projectFinishedAt = toDateLongFormat(formatFinishedDate);

  // console.log("createdDate", createdDate);
  // console.log("finishedAt", finishedAt);

  console.log("formatFinishedDate", formatFinishedDate);
  console.log("projectFinishedAt", projectFinishedAt);

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
          <div className="flex flex-row">
            <img src="./img/avatar_anne.png" className="h-1/5 w-1/5" />
            <img src="./img/avatar_jane.png" className="h-1/5 w-1/5" />
            <img src="./img/avatar_john.png" className="h-1/5 w-1/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardproject;
