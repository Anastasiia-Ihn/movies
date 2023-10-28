import axios from 'axios';
import { key } from '../utils/constants';

// const key = '84201912ed7e3ce22261b9e0387010b4';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

export const fetchData = async () => {
  const params = new URLSearchParams({
    language: 'en-US',
    api_key: key,
  });

  const resp = await axios.get(`${BASE_URL}?${params}`);
  return resp.data;
};
