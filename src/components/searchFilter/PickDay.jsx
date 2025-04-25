import { useState } from "react";
import "cally"; // Importa Cally

export default function PickDay() {
  const [selectedDate, setSelectedDate] = useState("Pick a date");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="dropdown dropdown-end flex flex-col md:flex-row gap-1 p-0 ">
      <button 
        tabIndex={0} 
        className="input input-bordered input-secondary w-full"
        id="cally-button"
      >
        {selectedDate}
      </button>
      
      <div 
        tabIndex={0} 
        className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-auto"
      >
        <calendar-date 
          className="cally" 
          onchange={handleDateChange}
          style={{"--cally-selected-bg": "hsl(var(--p))", "--cally-selected-color": "hsl(var(--pc))"}}
        >
          <svg aria-label="Previous" className="fill-current text-primary size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
          <svg aria-label="Next" className="fill-current text-primary size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          <calendar-month></calendar-month>
        </calendar-date>
      </div>
    </div>
  );
}
