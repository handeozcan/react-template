import axios from 'axios';
import { BASE_URL } from './config';

export const fetchUser = async (body, url) => {
  try {
    const data = await axios.post(`${BASE_URL + url}`, body);
    console.log(data.data, 'dataa');
    return data.data;
  } catch (error) {
    console.log(error.response.data, 'error');
    return error.response.data;
  }
};
