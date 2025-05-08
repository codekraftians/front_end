import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/buttons/Button";
import avatarImg from "../assets/Imagen.png";

function EventDetailsOld() {
  const eventoMock = {
    title: "Fiesta HashMap 2024",
    date: "2025-05-01T19:00:00",
    mode: "Presencial",
    location: "La Raposa",
    createdBy: {
      nombre: "UserName",
      email: "email@email.com",
    },
    availableSeats: 15,
  };

  const formatDate = (fechaISO) =>
    new Date(fechaISO).toLocaleString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatearFechaHora = (fecha, hora) =>
    new Date(`${fecha}T${hora}`).toLocaleString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <>
      <Header />

      <main className="min-h-screen bg-base-200 p-4 flex flex-col items-center gap-4">
        <div className="w-full max-w-md bg-base-100 p-4 rounded-lg shadow flex items-center gap-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatarImg} alt="Avatar" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-lg font-bold leading-tight">
              {eventoMock.createdBy.nombre}
            </p>
            <p className="text-sm text-gray-500">
              {eventoMock.createdBy.email}
            </p>
            <p className="text-xs text-gray-400">••••••••</p>
          </div>
        </div>

        <div className="card w-full max-w-md bg-base-100 shadow-lg">
          <figure>
            <img
              src={avatarImg}
              alt="Fiesta HashMap 2024"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="badge badge-secondary w-fit">New</div>
            <h2 className="card-title text-lg">{eventoMock.title}</h2>
            <p className="text-sm text-gray-500">
              {formatDate(eventoMock.date)} · {eventoMock.mode}
            </p>
            <p className="text-sm text-gray-500">{eventoMock.location}</p>
            <div className="mt-2">
              <p className="text-info text-sm font-semibold">
                Remaining {eventoMock.availableSeats} seats
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Button variant="ghost" onClick={() => window.history.back()}>
            Back
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default EventDetailsOld;
