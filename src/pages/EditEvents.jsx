import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import eventoImg from "../assets/Imagen.png";

const EditEvent = () => {
  const [formData, setFormData] = useState({
    name: "Event Name",
    date: "2023-12-31T15:00",
    description: "Initial event description",
    capacity: 50,
    mode: "online",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = () => {
    console.log("Datos actualizados:", formData);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar />

      <main className="flex-1 container mx-auto p-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="card w-full max-w-xl bg-base-100 shadow-xl">
            <figure>
              <img
                src={eventoImg} // remplazar co la img real del evento selecciond
                alt={formData.name}
                className="w-full h-60 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">{formData.name}</h2>
              <button
                className="btn btn-warning max-w-24"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditEvent;
