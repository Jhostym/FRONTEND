import axios from "./axios";



export const getBoletasRequest = () => axios.get(`/boletas`);

export const createBoletasRequest = (boletas) => axios.post(`/boletas`, boletas);


export const updateBoletasRequest = (id, task) => axios.put(`/boletas/${id}`, task);