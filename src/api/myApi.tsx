import axios from "axios";

export const myApi = axios.create({
    baseURL: 'http://192.168.86.24:3000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});