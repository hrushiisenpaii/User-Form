import axios from 'axios'

const API = axios.create({ baseURL: 'https://userformhp.onrender.com/'})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const fetchAllUsers = () => API.get("/user/getAllUsers");