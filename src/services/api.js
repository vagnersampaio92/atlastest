import axios from 'axios';
const api = axios.create(
    {
        baseURL:'https://api.github.com/'
        // baseURL:'https://boradeliveryone.herokuapp.com/api/'
    }
)
export default api;