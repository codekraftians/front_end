import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TechSafeSpace</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/explore'>Explore</Link></li>
          <li>
            <details>
              <summary>Sign in</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><Link to='/login'>Log in</Link></li>
                <li><Link to='/register'>Register</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
