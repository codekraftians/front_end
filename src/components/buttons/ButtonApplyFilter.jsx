import React from "react";
import { getAllEvents } from "../../services/apiEvents";

const ButtonApplyFilter = ({
  onClick,
  selectedCategory,
  setFilteredEvents,
  searchTitle,
}) => {
  const handleApplyFilters = async () => {
    if (onClick) {
      onClick();
    }

    try {
      const allEvents = await getAllEvents();

      let filteredEvents = allEvents;

      if (selectedCategory) {
        filteredEvents = filteredEvents.filter(
          (event) => event.eventType === selectedCategory
        );
      }

      if (searchTitle && searchTitle.trim() !== "") {
        filteredEvents = filteredEvents.filter((event) =>
          event.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
      }

      if (setFilteredEvents) {
        setFilteredEvents(filteredEvents);
      }
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  return (
    <button className="btn btn-secondary p-4" onClick={handleApplyFilters}>
      Apply Filters
    </button>
  );
};

export default ButtonApplyFilter;
