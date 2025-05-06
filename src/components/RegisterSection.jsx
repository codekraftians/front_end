import React, { useState } from 'react';
import ButtonCreate from './buttons/ButtonCreate';

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userImageUrl: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      userImageUrl: ''
    });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-[70vh]">
      <div className="bg-white shadow-md p-8 rounded-md w-80 text-center">
        <h1 className="text-lg mb-6">Register</h1>

        {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}

        <form>
          <div className="form-control mb-4">
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="input input-bordered w-full"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-control mb-4">
            <input
              type="email"
              name="email"
              placeholder="mail@site.com"
              className="input input-bordered w-full"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <div className="validator-hint text-xs text-gray-500 text-left">Enter valid email address</div>
          </div>

          <div className="form-control mb-2">
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be at least 8 characters, including a number, a lowercase letter, and an uppercase letter"
              value={formData.password}
              onChange={handleChange}
            />
            
            <p className="validator-hint text-xs text-gray-500 mb-4 text-left">
              Must be more than 8 characters, including
              <br/>• At least one number
              <br/>• At least one lowercase letter
              <br/>• At least one uppercase letter
            </p>
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sm text-gray-600">URL de imagen de perfil</span>
            </label>
            <input
              type="url"
              name="userImageUrl"
              placeholder="https://ejemplo.com/mi-imagen.jpg"
              className="input input-bordered w-full text-sm"
              value={formData.userImageUrl}
              onChange={handleChange}
            />
            <div className="validator-hint text-xs text-gray-500 text-left">Opcional: Ingresa la URL de tu imagen de perfil</div>
          </div>

          <div className="flex justify-center gap-4">
            <ButtonCreate 
              formData={formData} 
              setIsLoading={setIsLoading} 
              setError={setError} 
            />
            
            <button
              type="button"
              className="btn btn-sm bg-secondary text-white border-none hover"
              onClick={handleClear}
              disabled={isLoading}
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
