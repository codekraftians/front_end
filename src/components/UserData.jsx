import React from "react";
import Button from "./buttons/Button";

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

const UserData = () => {
  // Filtrar el usuario con ID 3
  const selectedUser = users.find((user) => user.id === 3);

  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* Card principal */}
      <div className="card bg-base-300 rounded-box w-full max-w-4xl p-4 shadow-md">
        <div className="flex flex-row md:flex-row items-start gap-4 justify-start">
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
        <figure>
          <img
            src="https://picsum.photos/500/400"
            alt="Movie"
            className="rounded-lg"
          />
        </figure>
      </div>

      {/* Formulario */}
      <div className="card bg-base-300 rounded-box w-full max-w-4xl mt-4 shadow-md p-4">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box p-4">
          <input
            type="text"
            className="input input-bordered w-full mb-4"
            placeholder="Event Name"
          />
          <div className="flex flex-colum gap-10 w-full max-w-4xl p-4">
            <input type="date" className="input" placeholder="Pick a Date" />
            <input
              type="time"
              className="input input-bordered w-full md:w-1/2"
              placeholder="Pick an Hour"
            />
          </div>
          <input
            type="text"
            className="input input-bordered w-full mb-4"
            placeholder="Description"
          />
          <input
            type="text"
            className="input input-bordered w-full mb-4"
            placeholder="Aforo Máximo"
          />
          <div className="flex flex-row gap-10 w-full max-w-4xl p-4 items-center justify-center">
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
          <div className="flex flex-row gap-10 w-full max-w-4xl p-4 items-center justify-center">
            <Button variant="accent">Create</Button>
            <Button variant="error">Cancel</Button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default UserData;
