import React, { useState, useEffect } from "react";
import { updateUser } from "../services/apiUsers";

function UserDataProfile() {
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorUser, setErrorUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("tssUser");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }

  }, []);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditable(!isEditable);
    setErrorUser(null);
    if (isEditable) {
      const userId = userData.id;
      updateUser(userId, userData)
        .then(() => {
          localStorage.setItem("tssUser", JSON.stringify(userData));
          setIsEditable(false);
        })
        .catch((error) => {
          if (error.response && error.response.data && error.response.data.errors) {
            const errorMessages = error.response.data.errors.map((err) => err.defaultMessage).join("\n\n, ");
            setErrorUser(errorMessages);
          }else {
            setErrorUser("An error occurred while updating the user data.");
          }
        });
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      {
        userData ? (
          <div className="card bg-base-300 rounded-box w-full max-w-md p-6 shadow-md">

            {errorUser && <div className="text-red-500 mb-4 text-sm">{errorUser}</div>}

            {/* Imagen del usuario */}
            <div className="flex flex-col items-center mb-6">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={userData.userImageUrl} alt="User Avatar" />
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
                  className={`input input-bordered w-full ${isEditable ? "bg-white" : "bg-gray-100"
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
                  className={`input input-bordered w-full ${isEditable ? "bg-white" : "bg-gray-100"
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
                  className={`input input-bordered w-full ${isEditable ? "bg-white" : "bg-gray-100"
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
        ) : (
          <div className="alert alert-error">
            <span>Error loading user data,please login</span>
          </div>
        )
      }

    </div>
  );
}

export default UserDataProfile;