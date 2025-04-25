import React from 'react';

const RegisterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value); // username
    console.log(e.target[1].value); // email
    console.log(e.target[2].value); // password
    handleClear();
  };

  const handleClear = () => {
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('input[type="password"]').value = '';
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-[70vh]">
      <div className="bg-white shadow-md p-8 rounded-md w-80 text-center">
        <h1 className="text-lg mb-6">Regístrate</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <input
              type="email"
              placeholder="mail@site.com"
              className="input input-bordered w-full"
              required
            />
            <div className="validator-hint text-xs text-gray-500 text-left">Enter valid email address</div>
          </div>

          <div className="form-control mb-2">
            <input
              type="password"
              className="input input-bordered w-full"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Debe tener al menos 8 caracteres, incluyendo un número, una letra minúscula y una letra mayúscula"
            />
            
            <p className="validator-hint text-xs text-gray-500 mb-4 text-left">
              Must be more than 8 characters, including
              <br/>• At least one number
              <br/>• At least one lowercase letter
              <br/>• At least one uppercase letter
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="btn btn-sm bg-cyan-400 text-white border-none hover:bg-cyan-500"
            >
              Crear
            </button>
            <button
              type="button"
              className="btn btn-sm bg-pink-400 text-white border-none hover:bg-pink-500"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterSection;
