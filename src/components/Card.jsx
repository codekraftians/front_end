import React, { useEffect, useState } from "react";
import { getAllEvents } from "../services/apiEvents";

const Card = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents(); // Llama a la función para obtener eventos
        setEvents(data); // Almacena los eventos en el estado
      } catch (err) {
        setError("Failed to fetch events");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return <p className="text-center">Loading events...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="card bg-base-100 w-full max-w-sm shadow-sm min-h-[250px] md:min-h-[25vh] lg:min-h-[30vh] hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <figure>
            <img src={event.imageUrl} alt={event.title} />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">
              {event.title}
              {event.isNew && <div className="badge badge-secondary">NEW</div>}
            </h2>
            <p>{event.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-base">Join!</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
