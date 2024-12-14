import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Replace with your server's base URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
  
});


export default axiosInstance;