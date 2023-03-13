import axios from 'axios'

const API = axios.create({ baseURL: 'https://userformhp.onrender.com/'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const fetchAllUsers = () => API.get("/user/getAllUsers");