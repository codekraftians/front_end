import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/buttons/Button";
import avatarImg from "../assets/Imagen.png";

function EventDetails() {
  const eventoMock = {
    titulo: "Fiesta HashMap 2024",
    fecha: "2025-05-01T19:00:00",
    modalidad: "Presencial",
    ubicacion: "La Raposa",
    creadoPor: {
      nombre: "UserName",
      email: "email@email.com",
    },
    plazasDisponibles: 15,
  };

  const formatearFecha = (fechaISO) =>
    new Date(fechaISO).toLocaleString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <>
      <Header />

      <main className="min-h-screen bg-base-200 p-4 flex flex-col items-center gap-4">
        {/* Usuario */}
        <div className="w-full max-w-md bg-base-100 p-4 rounded-lg shadow flex items-center gap-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatarImg} alt="Avatar" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-lg font-bold leading-tight">
              {eventoMock.creadoPor.nombre}
            </p>
            <p className="text-sm text-gray-500">
              {eventoMock.creadoPor.email}
            </p>
            <p className="text-xs text-gray-400">••••••••</p>
          </div>
        </div>

        {/* Tarjeta del evento */}
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
            <h2 className="card-title text-lg">{eventoMock.titulo}</h2>
            <p className="text-sm text-gray-500">
              {formatearFecha(eventoMock.fecha)} · {eventoMock.modalidad}
            </p>
            <p className="text-sm text-gray-500">{eventoMock.ubicacion}</p>
            <div className="mt-2">
              <p className="text-info text-sm font-semibold">
                Quedan {eventoMock.plazasDisponibles} plazas
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
}

export default EventDetails;
