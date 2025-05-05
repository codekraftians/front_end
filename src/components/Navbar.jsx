import React from "react";
import { Link } from "react-router-dom";

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

const Navbar = () => {
  const selectedUser = users.find((user) => user.id === 3);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TechSafeSpace</a>
      </div>

      {/* Menú y Avatar */}
      <div className="flex-none flex items-center gap-4">
        {/* Menú */}
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <details>
              <summary>Sign in</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link to="/login">Log in</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>

        {/* Avatar */}
        <div className="avatar">
          <div className="w-10 md:w-12 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
            <img src={selectedUser.image} alt={selectedUser.username} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
