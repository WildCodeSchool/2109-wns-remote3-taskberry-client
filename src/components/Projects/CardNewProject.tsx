import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue, Day } from "react-modern-calendar-datepicker";

function CardNewProject(): JSX.Element {
  const [day, setDay] = useState<DayValue>(null);

  return (
    <div className="bg-white rounded-2xl h-[200px] w-[290px] flex">
      <div className="p-5 w-full space-y-6">
        <div className="flex-col border-b border-gray-500 py-2 w-[150px]">
          <input
            className="text-xl appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-transparent"
            type="text"
            placeholder="Titre du projet"
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
          <button className="bg-purple-medium hover:bg-purple-medium text-white font-bold py-1 px-4 rounded">
            Créer
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardNewProject;
