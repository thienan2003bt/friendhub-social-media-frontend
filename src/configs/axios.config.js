import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_URL,
    withCredentials: true,
});


//REQUEST
instance.interceptors.request.use((config) => {
    // config.headers.Authorization = `Bearer ${tokenInHeader}`;
    return config;
}, (err) => {
    return Promise.reject(err);
});


//RESPONSE
instance.interceptors.response.use((response) => {
    return response.data;
}, (err) => {
    const data = err?.response?.data;
    let msg = data.message;

    return data ?? Promise.reject(new Error(msg ?? ''));
});



export default instance;