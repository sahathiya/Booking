import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://booking-sggw.onrender.com', 
  withCredentials: true,
  
});


export default axiosInstance;