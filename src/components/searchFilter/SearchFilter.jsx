import React, { useState } from 'react';
import SelectCategory from "./SelectCategory";
import ButtonApplyFilter from "../buttons/ButtonApplyFilter";

const SearchFilter = ({ setEvents }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleApplyFilters = () => {
    console.log("Applying filter for category:", selectedCategory);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 p-2">
      <SelectCategory onSelect={handleCategoryChange} />
      <ButtonApplyFilter 
        onClick={handleApplyFilters} 
        selectedCategory={selectedCategory}
        setFilteredEvents={setEvents}
      />
    </div>
  );
};

export default SearchFilter;
