import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backendtj.onrender.comgit /api/',

  withCredentials: true,
})

export default instance;