import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserDataProfile from "../components/UserDataProfile";

function AllUserData() {
  const [activeComponent, setActiveComponent] = useState("userDataProfile");

  // Función para renderizar el componente activo
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "userDataProfile":
        return <UserDataProfile />;
      case "myEvents":
        return <h1 className="text-xl font-bold">Mis eventos</h1>;
      case "attendedEvents":
        return <h1 className="text-xl font-bold">Eventos a los que asistí</h1>;
      case "futureEvents":
        return (
          <h1 className="text-xl font-bold">Eventos a los que asistiré</h1>
        );
      case "interestedEvents":
        return <h1 className="text-xl font-bold">Eventos que me interesan</h1>;
      default:
        return <h1 className="text-xl font-bold">Selecciona una opción</h1>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full min-h-screen">
        {/* Menú responsivo centrado */}
        <div className="flex justify-center items-center bg-base-200 w-full p-4">
          <ul className="menu flex flex-row md:flex-row gap-4 bg-base-100 rounded-box shadow-md p-4">
            <li>
              <button
                className={`font-bold ${
                  activeComponent === "userDataProfile" ? "text-primary" : ""
                }`}
                onClick={() => setActiveComponent("userDataProfile")}
              >
                User Data Profile
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeComponent === "myEvents" ? "text-primary" : ""
                }`}
                onClick={() => setActiveComponent("myEvents")}
              >
                Mis eventos
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeComponent === "attendedEvents" ? "text-primary" : ""
                }`}
                onClick={() => setActiveComponent("attendedEvents")}
              >
                Eventos a los que asistí
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeComponent === "futureEvents" ? "text-primary" : ""
                }`}
                onClick={() => setActiveComponent("futureEvents")}
              >
                Eventos a los que asistiré
              </button>
            </li>
            <li>
              <button
                className={`${
                  activeComponent === "interestedEvents" ? "text-primary" : ""
                }`}
                onClick={() => setActiveComponent("interestedEvents")}
              >
                Eventos que me interesan
              </button>
            </li>
          </ul>
        </div>

        {/* Contenido dinámico */}
        <div className="flex-grow p-4">{renderActiveComponent()}</div>
      </div>
      <Footer />
    </>
  );
}

export default AllUserData;
