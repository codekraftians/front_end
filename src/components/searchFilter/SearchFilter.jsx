import PickDay from "./PickDay";
import SelectCategory from "./SelectCategory";
import InputEventName from "./SearchEventName";
import ButtonApplyFilter from "../buttons/ButtonApplyFilter";
import React from 'react';

const SearchFilter = () => {
  const handleApplyFilters = () => {
    console.log("Filtros aplicados");
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 p-2">
          <InputEventName />
            <SelectCategory  />
        <PickDay />
      <ButtonApplyFilter onClick={handleApplyFilters}  />
    </div>
  );
};

export default SearchFilter;
