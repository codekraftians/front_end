import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import SearchFilter from "../components/searchFilter/SearchFilter";
import { getAllEvents } from "../services/apiEvents";

function Explore() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const eventsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getAllEvents();
        setEvents(data);
        setTotalPages(Math.ceil(data.length / eventsPerPage));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <>
      <Navbar />
      <SearchFilter setEvents={setEvents} />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : error ? (
        <div className="alert alert-error max-w-md mx-auto my-8">
          <span>{error}</span>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center my-16">
          <h2 className="text-xl font-bold">No events found</h2>
          <p className="text-gray-500">Be the first to create an event!</p>
        </div>
      ) : (
        <div className="p-6 flex flex-wrap justify-center gap-6 space-y-6 space-x-6">
          {currentEvents.map((event) => (
            <div key={event.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md">
              <Card event={event} />
            </div>
          ))}
        </div>
      )}

      {!loading && !error && events.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}

      <Footer />
    </>
  );
}

export default Explore;
