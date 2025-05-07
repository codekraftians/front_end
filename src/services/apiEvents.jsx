import axios from 'axios';
// Api URL
const API_URL = 'http://localhost:8080/api/v1/events';

export const postEvent = async (event, userId) => {
    try {
      const response = await axios.post(`${API_URL}/user/${userId}`, event);
      return response.data;
    } catch (error) {
      console.error("Error posting event:", error);
      throw error;
    }
};

export const getEventById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error getting event by id:", error);
      throw error;
    }   
};

export const getAllEvents = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error getting all events:", error);
      throw error;
    }
};  

export const deleteEvent = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Error deleting event:", error);
      throw error;
    }
};

export const updateEvent = async (id, event) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, event);
      return response.data;
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
};