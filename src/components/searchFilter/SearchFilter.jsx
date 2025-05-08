import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import ButtonApplyFilter from "../buttons/ButtonApplyFilter";

const SearchFilter = ({ setEvents }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTitleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleApplyFilters = () => {
    console.log("Applying filter for category:", selectedCategory);
    console.log("Applying filter for title:", searchTitle);
  };

  return (
    <div className="flex flex-row items-center gap-2 p-2">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={handleTitleChange}
        className="input input-bordered"
      />
      <SelectCategory onSelect={handleCategoryChange} />
      <ButtonApplyFilter
        onClick={handleApplyFilters}
        selectedCategory={selectedCategory}
        searchTitle={searchTitle}
        setFilteredEvents={setEvents}
      />
    </div>
  );
};

export default SearchFilter;
