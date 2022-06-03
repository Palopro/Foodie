import axios from 'axios';

const baseUrl = 'https://rn-delivery-api.herokuapp.com/api';

export const registerUser = async (userCredentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${baseUrl}/auth/local/register`, {
    ...userCredentials,
  });

  return response.data;
};

export const loginUser = async (userCredentials: {
  identifier: string;
  password: string;
}) => {
  const response = await axios.post(`${baseUrl}/auth/local`, {
    ...userCredentials,
  });

  return response.data;
};
