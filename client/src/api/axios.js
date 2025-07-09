import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // update to your deployed backend URL later
});

export default instance;
