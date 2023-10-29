import axios from 'axios';

const key = '84201912ed7e3ce22261b9e0387010b4';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  language: 'en-US',
  api_key: key,
};

// =================================================================

export const fetchData = async () => {
  const resp = await axios.get(`/trending/movie/day`);
  return resp.data;
};

// ==================================================================

export const fetchDataById = async movieId => {
  const resp = await axios.get(`/movie/${movieId}?`);
  return resp.data;
};

// ==================================================================

export const fetchDataByIdForCast = async movieId => {
  const resp = await axios.get(`/${movieId}/credits?`);
  return resp.data.cast;
};

// ==================================================================

export const fetchDataByIdForReviews = async movieId => {
  const resp = await axios.get(`/movie/${movieId}/reviews?`);
  return resp.data.results;
};

// ==================================================================

export const fetchDataByValue = async valueInput => {
  const resp = await axios.get(`/search/movie?query= ${valueInput}`);
  return resp.data;
};

// ==================================================================
