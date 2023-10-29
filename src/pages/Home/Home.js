import { fetchData } from 'API/api';
import { ListTrends } from 'components/ListTrends/ListTrends';
import { useEffect, useState } from 'react';
import { MainTitle } from './Home.styled';

export default function Home() {
  const [arrMovies, setArrMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await fetchData();

        setArrMovies(movies.results);
      } catch (error) {
        console.log('err');
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <MainTitle>Trending today</MainTitle>
      <ListTrends list={arrMovies}></ListTrends>
    </>
  );
}
