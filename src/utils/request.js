import axios from 'axios';

const http = axios.create({
    // baseURL: '/api',
    timeout: 5000
});

http.interceptors.request.use(function (config) {
    // console.log(config);
    return config;
}, function (error) {
    // console.log(error);
    return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
    // console.log(response);
    return response;
}, function (error) {
    // console.log(error);
    return Promise.reject(error);
});

export default http;