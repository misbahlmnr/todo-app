import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_TODO_API_URL,
});

export default axiosClient;
