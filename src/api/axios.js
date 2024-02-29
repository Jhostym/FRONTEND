import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backendtj.onrender.com/api/',

  withCredentials: true,
})

export default instance;