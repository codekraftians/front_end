import axios from 'axios';

// Api URL
const API_URL = 'http://localhost:8080/api/v1/users';


export const postUser = async (user) => {
    try {
      const response = await axios.post(API_URL, user);
      return response.data;
    } catch (error) {
      console.error("Error posting user:", error);
      throw error;
    }
};

export const updateUser = async (userId, newUser) => {
    try {
      await axios.put(`${API_URL}/${userId}`, newUser);
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
      await axios.delete(`${API_URL}/${userId}`);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
};

export const getUser = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error getting users:", error);
      throw error;
    }
  };

  export const loginUser = async (email, password) => {
    try {
      const response = await axios.get(`${API_URL}/login`, { params: { email, password } });
      return response.data;
    } catch (error) {
      console.error("Error logging in user:", error);
      throw error;
    }
  }

  

