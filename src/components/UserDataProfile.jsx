import React, { useState } from "react";

function UserDataProfile() {
  const [isEditable, setIsEditable] = useState(false);

  const [userData, setUserData] = useState({
    email: "user@example.com",
    name: "UserName",
    password: "Password123!",
    user_image_url: "https://picsum.photos/200/300",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="card bg-base-300 rounded-box w-full max-w-md p-6 shadow-md">
        {/* Imagen del usuario */}
        <div className="flex flex-col items-center mb-6">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userData.user_image_url} alt="User Avatar" />
            </div>
          </div>
          <h2 className="text-xl font-bold mt-4">{userData.name}</h2>
        </div>

        {/* Datos del usuario */}
        <div className="flex flex-col gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              disabled={!isEditable}
              className={`input input-bordered w-full ${
                isEditable ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              disabled={!isEditable}
              className={`input input-bordered w-full ${
                isEditable ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              disabled={!isEditable}
              className={`input input-bordered w-full ${
                isEditable ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="btn btn-primary" onClick={toggleEdit}>
            {isEditable ? "Save" : "Edit"}
          </button>
          {isEditable && (
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditable(false)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDataProfile;
