import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TechSafeSpace</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Explore</a></li>
          <li>
            <details>
              <summary>Sign in</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a href='/login'>Log in</a></li>
                <li><a href='/register'>Register</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
