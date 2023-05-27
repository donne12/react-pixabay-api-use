import axios from 'axios';

const API = axios.create({
  baseURL: 'https://pixabay.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    key: "10701819-f729ea010526c6f41df8dfb02",
    safesearch: true,
  },
});

export default API;
