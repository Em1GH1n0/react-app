import AXIOS from 'axios';

const api = AXIOS.create({
  // baseURL: '/api',
  baseURL: "http://localhost:10000",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
