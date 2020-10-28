import axios from 'axios';

const instance = axios.create({
    baseURL: 'ADD-YOUR-URL'
});

export default instance;