import React from 'react';
import { getAllEvents } from '../../services/apiEvents';

const ButtonApplyFilter = ({ onClick, selectedCategory, setFilteredEvents, searchTitle }) => {
  const handleApplyFilters = async () => {
    // Call the parent component's onClick handler if provided
    if (onClick) {
      onClick();
    }

    try {
      // Get all events from the API
      const allEvents = await getAllEvents();
      
      // Filter events by category and/or title
      let filteredEvents = allEvents;
      
      // Apply category filter if selected
      if (selectedCategory) {
        filteredEvents = filteredEvents.filter(event => event.eventType === selectedCategory);
      }
      
      // Apply title filter if provided
      if (searchTitle && searchTitle.trim() !== '') {
        filteredEvents = filteredEvents.filter(event => 
          event.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
      }
      
      // Update the events state with the filtered results
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
