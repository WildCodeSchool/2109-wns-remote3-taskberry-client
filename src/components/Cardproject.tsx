import React from "react";

interface Team {
  avatar: string;
}
interface CardData {
  id: string;
  title: string;
  date: string;
  userAvatar: string;
  team: Team[];
}

const Cardproject: React.FC<CardData> = (props) => {
  return (
    <div className="bg-white rounded-2xl h-[250px] w-[290px] flex">
      <div className="p-5">
        <div className="flex-col">
          <p className="text-xl text-left">{props.title}</p>
        </div>
        <div className="flex-col">
          <p className="text-sm text-left mt-1">Date: {props.date}</p>
        </div>
        <div className="flex-col">
          <p className="text-sm text-left mt-1">Chef de projet :</p>
          <img src={props.userAvatar} className="h-[60px] w-[60px]" />
        </div>
        <div className="flex-col">
          <p className="text-sm text-left mt-2">Equipe :</p>
          <div className="flex flex-row">
            {props.team.map((teammate, key) => (
              <img key={key} src={teammate.avatar} className="h-1/5 w-1/5" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardproject;
