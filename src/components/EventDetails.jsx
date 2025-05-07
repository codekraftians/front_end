import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/apiEvents"; // Asegúrate de tener esta función en tu API

const EventDetails = () => {
  const { id } = useParams(); // Obtiene el ID del evento desde la URL
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(id); // Llama a la API para obtener los detalles del evento
        setEvent(data);
      } catch (err) {
        setError("Failed to fetch event details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (isLoading) {
    return <p className="text-center">Loading event details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <img src={event.imageUrl} alt={event.title} className="my-4" />
      <p className="text-lg">{event.description}</p>
      <p className="text-sm text-gray-500">Date: {event.date}</p>
      <p className="text-sm text-gray-500">Location: {event.location}</p>
    </div>
  );
};

export default EventDetails;
