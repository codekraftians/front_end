import React, { useState } from "react";
import Button from "./buttons/Button";
import { useCloudinaryUpload } from "./hooks/useCloudinaryUpload";

// Array de datos de usuarios con IDs
const users = [
  {
    id: 1,
    image: "https://picsum.photos/200/300",
    username: "John Doe",
    email: "johndoe@example.com",
    title: "User Profile",
  },
  {
    id: 2,
    image: "https://picsum.photos/200/300",
    username: "Jane Smith",
    email: "janesmith@example.com",
    title: "Admin Profile",
  },
  {
    id: 3,
    image: "https://picsum.photos/200/300",
    username: "Alice Johnson",
    email: "alicejohnson@example.com",
    title: "Moderator Profile",
  },
];

const CreateEventData = () => {
  //Gesión de estado para el evento

  const [FormDataEvent, setFormDataEvent] = useState({
    title: "",
    description: "",
    eventDate: "",
    eventTime: "",
    eventsImageUrl: "",
    location: "",
    maxAttendees: "",
    eventType: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataEvent({
      ...FormDataEvent,
      [name]: value,
    });
  };

  const handleClear = () => {
    setFormDataEvent({
      title: "",
      description: "",
      eventDate: "",
      eventTime: "",
      eventsImageUrl: "",
      location: "",
      maxAttendees: "",
      eventType: "",
    });
  };

  // Filtrar el usuario con ID 3
  const selectedUser = users.find((user) => user.id === 3);

  // variable para seleccionar el archivo
  const [file, setFile] = useState(null);
  // hook para subir el archivo a Cloudinary
  const {
    uploading,
    uploadComplete,
    cloudinaryResponse,
    errorCloudinary,
    setErrorCloudinary,
    uploadFile,
  } = useCloudinaryUpload();

  // función para seleccionar el archivo
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
      setFile(null);
      setErrorCloudinary(
        "El archivo supera los 10MB. Por favor, selecciona uno más pequeño."
      );
    } else {
      setFile(selectedFile);
      setErrorCloudinary("");
    }
  };

  // funcion en la que se sube el archivo a Cloudinary
  const handleUpload = () => {
    if (file) {
      uploadFile(file);
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* Card principal */}
      <div className="card bg-base-300 rounded-box w-full max-w-4xl p-4 shadow-md">
        <div className="flex flex-row items-center gap-4">
          {/* Avatar */}
          <div className="avatar flex-shrink-0">
            <div className="w-24 md:w-32 rounded-xl ring ring-black ring-offset-base-100 ring-offset-8">
              <img src={selectedUser.image} alt={selectedUser.username} />
            </div>
          </div>
          {/* User Data */}
          <div className="flex flex-col text-left">
            <h2 className="text-xl font-bold">{selectedUser.username}</h2>
            <p className="text-sm text-gray-500">{selectedUser.email}</p>
            <p className="text-sm text-gray-400">{selectedUser.title}</p>
          </div>
        </div>
      </div>

      {/* Imagen adicional */}
      <div className="card bg-base-300 rounded-box w-full max-w-4xl mt-4 shadow-md">
        {cloudinaryResponse && (
          <figure>
            <img
              width={500}
              src={cloudinaryResponse?.url}
              alt="Foto del evento"
              className="rounded-lg"
            />
          </figure>
        )}
      </div>

      {/* Formulario */}
      <div className="card bg-base-300 rounded-box w-full max-w-4xl mt-4 shadow-md p-4">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
          <div className="flex flex-row md:flex-row gap-4 w-full">
            {/* etiqueta para seleccionar archivo */}
            <input
              type="file"
              className="file-input"
              placeholder="Foto del evento"
              onChange={handleFileChange}
            />
            <label className="label">Max size 10MB</label>
            {errorCloudinary && (
              <div className="alert alert-error">
                <span>{errorCloudinary} </span>
              </div>
            )}
            {/* botón para subir el archivo */}
            <Button
              variant="accent"
              onClick={handleUpload}
              disabled={file === null || uploading}
            >
              {uploading ? "Uploading..." : "Upload picture the event"}
            </Button>
          </div>

          <input
            type="text"
            className="input input-bordered w-full mb-4"
            placeholder="Event Name"
            value={FormDataEvent.title}
            onChange={handleChange}
          />
          <div className="flex flex-row md:flex-row gap-4 w-full">
            <input
              type="date"
              className="input input-bordered w-full md:w-1/2"
              placeholder="Pick a Date"
              value={event.eventDate}
              onChange={handleChange}
            />
            <input
              type="time"
              className="input input-bordered w-full md:w-1/2"
              placeholder="Pick an Hour"
              value={event.eventTime}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            className="input input-bordered w-full mb-4 mt-4" // Añadido mt-4 para más separación
            placeholder="Description"
            value={event.description}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input input-bordered w-full mb-4"
            placeholder="Max Attendees"
            value={event.maxAttendees}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input input-bordered w-full mb-4"
            placeholder="Location"
            value={event.location}
            onChange={handleChange}
          />
          <div className="flex flex-row md:flex-row gap-4 w-full items-center justify-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-warning"
                defaultChecked
              />
              In person
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-warning"
                defaultChecked
              />
              Online
            </label>
          </div>
          <div className="flex flex-row md:flex-row gap-4 w-full items-center justify-center mt-4 mb-4">
            <Button variant="accent">Create</Button>
            <Button variant="error">Cancel</Button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default CreateEventData;
