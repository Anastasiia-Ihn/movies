import axios from 'axios';

const key = '84201912ed7e3ce22261b9e0387010b4';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export const fetchDataByValue = async (valueInput, page) => {
  const params = new URLSearchParams({
    language: 'en-US',
    api_key: key,
    query: valueInput,
    page: page,
  });

  const resp = await axios.get(`${BASE_URL}?${params}`);
  return resp.data;
};
