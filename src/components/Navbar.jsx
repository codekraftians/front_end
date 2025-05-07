import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("tssUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          TechSafeSpace
        </Link>
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
        {
          user && user.userImageUrl ?
            (<div className="avatar">
              <div className="w-10 md:w-12 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                <Link to="/user/data/all">
                  <img src={user.userImageUrl} alt={user.name} />
                </Link>
              </div>
            </div>)
            : <></>
        }
      </div>
    </div>
  );
};

export default Navbar;
