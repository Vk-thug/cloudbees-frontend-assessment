// services/github.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
export const getUsersByLimit = async (page, item) => {
    try {
      const response = await axios.get(`${BASE_URL}/users?per_page=${item}&page=${page}`);
      return response.data
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };
export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data
  } catch (error) {
    console.error(`Error fetching user details for ${username}:`, error);
    throw error;
  }
};

export const getRepoDetails = async (username) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching Repo details for ${username}:`, error);
      throw error;
    }
  };
