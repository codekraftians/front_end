import React from 'react';
import { postUser } from '../../services/apiUsers';

const ButtonCreate = ({ formData, setIsLoading, setError }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      await postUser(formData);
      // Podría redirigir al usuario o mostrar un mensaje de éxito
      console.log('User registered successfully');
    } catch (err) {
      setError(err.response?.data?.message || 'Error registering user. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      className="btn btn-sm bg-primary text-white border-none hover"
      onClick={handleSubmit}
      disabled={!formData.name || !formData.email || !formData.password}
    >
      Register
    </button>
  );
};

export default ButtonCreate;