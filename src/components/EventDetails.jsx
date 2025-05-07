import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/apiEvents";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/buttons/Button";
import avatarImg from "../assets/Imagen.png";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(id);
        setEvent(data);
        console.table(data); // Muestra los datos del evento en la consola
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to fetch event details"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const formatearFechaHora = (fecha, hora) =>
    new Date(`${fecha}T${hora}`).toLocaleString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  if (isLoading) {
    return <p className="text-center">Cargando detalles del evento...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!event) {
    return <p className="text-center">No se encontró el evento</p>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-base-200 p-4 flex flex-col items-center gap-4">
        {/* Usuario */}
        <div className="w-full max-w-md bg-base-100 p-4 rounded-lg shadow flex items-center gap-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={event.user?.userImageUrl || avatarImg}
                alt="Avatar"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-lg font-bold leading-tight">
              {event.user?.name}
            </p>
            <p className="text-sm text-gray-500">{event.user?.email}</p>
          </div>
        </div>

        {/* Tarjeta del evento */}
        <div className="card w-full max-w-md bg-base-100 shadow-lg">
          <figure>
            <img
              src={event.eventsImageUrl || avatarImg} // Usa la imagen del evento o una predeterminada
              alt={event.title}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            {/* Badge de tipo de evento arriba del título */}
            <div className="badge badge-secondary w-fit mb-2">{event.eventType}</div>
            <h2 className="card-title text-lg">{event.title}</h2>
            <p className="text-sm text-gray-500">
              {formatearFechaHora(event.eventDate, event.eventTime)}
            </p>
            <p className="text-sm text-gray-500">{event.location}</p>
            <div className="mt-2">
              <p className="text-info text-sm font-semibold">
                Quedan {event.maxAttendees} plazas
              </p>
            </div>
          </div>
        </div>

        {/* Botón de volver */}
        <div className="mt-4">
          <Button variant="ghost" onClick={() => window.history.back()}>
            Volver
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventDetails;
