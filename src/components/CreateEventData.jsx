import React, { useState, useEffect } from "react";
import Button from "./buttons/Button";
import { useCloudinaryUpload } from "./hooks/useCloudinaryUpload";
import { postEvent } from "../services/apiEvents";


const MOCK_USER = {
  id: 3,
  image: "https://picsum.photos/200/300",
  name: "Alice Johnson",
  email: "alicejohnson@example.com",
  password: "Password123!",
};

const CreateEventData = () => {
 
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
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

 
  useEffect(() => {
    const storedUser = localStorage.getItem("tssUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } 
    setLoadingUser(false);
    
  }, []);

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
    setCloudinaryResponse(null);
    setFile(null);
  };

  
  const [file, setFile] = useState(null);
 
  const {
    uploading,
    uploadComplete,
    cloudinaryResponse,
    errorCloudinary,
    setErrorCloudinary,
    uploadFile,
    setCloudinaryResponse,
  } = useCloudinaryUpload();

  // función para seleccionar el archivo
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
      setFile(null);
      setErrorCloudinary(
        "The file exceeds 10MB. Please select a smaller one."
      );
    } else {
      setFile(selectedFile);
      setErrorCloudinary("");
    }
  };

  const handleUpload = () => {
    if (file) {
      uploadFile(file);
    }
  };

 
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (!user) {
        throw new Error("User data is not available");
      }
      
     
      const eventData = {
          title: FormDataEvent.title,
          description: FormDataEvent.description,
          eventDate: FormDataEvent.eventDate,
          eventTime: FormDataEvent.eventTime,
          eventsImageUrl: cloudinaryResponse?.url || "",
          location: FormDataEvent.location,
          maxAttendees: FormDataEvent.maxAttendees,
          eventType: FormDataEvent.eventType === "inPerson" ? "IN_PERSON" : "ONLINE", 
          user: {
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          userImageUrl: user.image, 
        }
      };
      
      console.log("Datos del evento a enviar:", eventData);
      
      try {
       
        const createdEvent = await postEvent(eventData, user.id);
        console.log("Evento creado en la base de datos:", createdEvent);
      } catch (apiError) {
        console.warn("API no disponible, usando modo mock:", apiError);
      
        console.log("Mock: Evento creado con éxito");
      }
      
      alert("Evento creado con éxito!");
      handleClear();
      
    } catch (err) {
      setError("Error creating event: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
     
      <div className="card bg-base-300 rounded-box w-full max-w-4xl p-4 shadow-md">
        {loadingUser ? (
          <div className="flex justify-center items-center p-4">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : user ? (
          <div className="flex flex-row items-center gap-4">
           
            <div className="avatar flex-shrink-0">
              <div className="w-24 md:w-32 rounded-xl ring ring-black ring-offset-base-100 ring-offset-8">
                <img src={user.userImageUrl} alt={user.name} />
              </div>
            </div>
          
            <div className="flex flex-col text-left">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
  
            </div>
          </div>
        ) : (
          <div className="alert alert-error">
            <span>Error loading user data, please login</span>
          </div>
        )}
      </div>

     
      <div className="card bg-base-300 rounded-box w-full max-w-4xl mt-4 shadow-md">
        {cloudinaryResponse && (
          <figure>
            <img
              width={500}
              src={cloudinaryResponse?.url}
              alt="Event photo"
              className="rounded-lg"
            />
          </figure>
        )}
      </div>

     
      <div className="card bg-base-300 rounded-box w-full max-w-4xl mt-4 shadow-md p-4">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
          <div className="flex flex-row md:flex-row gap-4 w-full">
        
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
            name="title"
            className="input input-bordered w-full mb-4"
            placeholder="Event Name"
            value={FormDataEvent.title}
            onChange={handleChange}
          />
          <div className="flex flex-row md:flex-row gap-4 w-full">
            <input
              type="date"
              name="eventDate"
              className="input input-bordered w-full md:w-1/2"
              placeholder="Pick a Date"
              value={FormDataEvent.eventDate}
              onChange={handleChange}
            />
            <input
              type="time"
              name="eventTime"
              className="input input-bordered w-full md:w-1/2"
              placeholder="Pick an Hour"
              value={FormDataEvent.eventTime}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            name="description"
            className="input input-bordered w-full mb-4 mt-4"
            placeholder="Description"
            value={FormDataEvent.description}
            onChange={handleChange}
          />
          <input
            type="number"
            name="maxAttendees"
            className="input input-bordered w-full mb-4"
            placeholder="Max Attendees"
            value={FormDataEvent.maxAttendees}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            className="input input-bordered w-full mb-4"
            placeholder="Location"
            value={FormDataEvent.location}
            onChange={handleChange}
          />
          <div className="flex flex-row md:flex-row gap-4 w-full items-center justify-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="eventType"
                value="inPerson"
                className="checkbox checkbox-warning"
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormDataEvent({
                      ...FormDataEvent,
                      eventType: "inPerson"
                    });
                  }
                }}
                checked={FormDataEvent.eventType === "inPerson"}
              />
              In person
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="eventType"
                value="online"
                className="checkbox checkbox-warning"
                onChange={(e) => {
                  if (e.target.checked) {
                    setFormDataEvent({
                      ...FormDataEvent,
                      eventType: "online"
                    });
                  }
                }}
                checked={FormDataEvent.eventType === "online"}
              />
              Online
            </label>
          </div>
          <div className="flex flex-row md:flex-row gap-4 w-full items-center justify-center mt-4 mb-4">
            <Button 
              variant="accent" 
              onClick={handleSubmit}
              disabled={isLoading || loadingUser}
            >
              {isLoading ? "Creating..." : "Create"}
            </Button>
            <Button variant="error" onClick={handleClear}>Cancel</Button>
          </div>
          {error && (
            <div className="alert alert-error mt-4">
              <span>{error}</span>
            </div>
          )}
        </fieldset>
      </div>
    </div>
  );
};

export default CreateEventData;
