import React, { useState } from "react";

const RegisterSection = () => {
  const [name, setName] = useState("admin");
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin123!");
  const [user_image] = useState("https://picsum.photos/200");

  const handleClick = (e) => {
    e.preventDefault();

    const user = { email, name, password, user_image };
    console.table(user);

    fetch("http://localhost:8080/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create user");
        }
        return response.json();
      })
      .then((data) => {
        console.log("New user added:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-[70vh]">
      <div className="bg-white shadow-md p-8 rounded-md w-80 text-center">
        <h1 className="text-lg mb-6">Register</h1>

        <form>
          <div className="form-control mb-4">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <input
              type="email"
              placeholder="mail@site.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <div className="validator-hint text-xs text-gray-500 text-left">
              Enter valid email address
            </div>
          </div>

          <div className="form-control mb-2">
            <input
              type="password"
              className="input input-bordered w-full"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be at least 8 characters, including a number, a lowercase letter, and an uppercase letter"
            />

            <p className="validator-hint text-xs text-gray-500 mb-4 text-left">
              Must be more than 8 characters, including
              <br />• At least one number
              <br />• At least one lowercase letter
              <br />• At least one uppercase letter
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="btn btn-sm bg-primary text-white border-none hover"
              onClick={handleClick}
            >
              Create
            </button>
            <button
              type="button"
              className="btn btn-sm bg-secondary text-white border-none hover"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterSection;
