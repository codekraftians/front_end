import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EditEvent = () => {
    const [formData, setFormData] = useState({
        name: "Nombre del Evento",
        date: "2023-12-31T15:00", // Ejemplo de formato datetime-local
        description: "Descripción inicial del evento",
        capacity: 50,
        mode: "online", // "online" o "in-person"
    });

    const handleEditClick = () => {
        setIsEditing(true); // Muestra el formulario
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }; //lo hacemos dinámico, cada campo actualizado se modifica en formData en tiempo real

    const handleSaveChanges = () => {
        // Aquí se enviarán los datos al backend añadir la logica
        console.log("Datos actualizados:", formData);
        setIsEditing(false); // Oculta el formulario después de guardar
    };

    return (
        <div className="flex flex-col min-h-screen bg-base-100">
            <Navbar />

            <main className="flex-1 container mx-auto p-6">
                <div className="flex flex-col items-center space-y-6">
                    {/* Componente de Usuario */}

                    {/* Card del evento */}
                    <div className="card w-full max-w-xl bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src="https://via.placeholder.com/300" // remplazar co la img real del evento selecciond
                                alt={formData.name}
                                className="w-full h-60 object-cover rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">{formData.name}</h2>
                            <button
                                className="btn btn-warning max-w-24"
                                onClick={handleEditClick} // Mantén tu función para manejar el clic
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
