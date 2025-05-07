import React from 'react';
import { loginUser } from '../services/apiUsers';
import { useNavigate } from "react-router-dom";


const LoginSection = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseUser = await loginUser(e.target[0].value, e.target[1].value);
    if (responseUser) {
      localStorage.setItem('tssUser', JSON.stringify(responseUser));
      navigate('/explore');
    } 
    handleClear();
  };

  const handleClear = () => {
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('input[type="password"]').value = '';
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-[70vh]">
      <div className="bg-white shadow-md p-8 rounded-md w-80 text-center">
        <h1 className="text-lg mb-6">Login</h1>

        <form onSubmit={handleSubmit}>
         

          <div className="form-control mb-6">
            <input
              type="email"
              placeholder="mail@site.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-6">
            <input
              type="password"
              className="input input-bordered w-full"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be at least 8 characters, including a number, a lowercase letter, and an uppercase letter"
            />
            
          </div>

          <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="btn btn-sm bg-info text-white border-none hover"
                >
                  Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
