import AXIOS from 'axios';

const api = AXIOS.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
