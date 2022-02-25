import React, { FC } from "react";
import { gql, useQuery } from "@apollo/client";

interface TicketProps {
  assignee: any;
  title: string;
}
export const Cardticket: FC<TicketProps> = ({ assignee, title }) => {
  return (
    <div className="w-full flex-col">
      <div className=" bg-white flex flex-col p-4 rounded-xl mb-3">
        <p className="text-l font-bold text-left ">{title}</p>
        <div className="flex self-end justify-around items-center">
          {/* <div className="bg-yellow-500 rounded-full flex flex-shrink-0 items-center justify-center h-6 w-14 text-xs">
            front
          </div>
          <div className="flex items-end w-6 h-6">
            <img src="./img/berryPoint.png" />
            <img src="./img/berryPoint.png" />
          </div> */}

          <img src={assignee} className="h-[60px] w-[60px] self-end" />
        </div>
      </div>
    </div>
  );
};

export default Cardticket;
