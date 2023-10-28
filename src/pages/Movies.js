import { fetchDataByValue } from 'API/apiByValue';
import { ListTrends } from 'components/ListTrends/ListTrends';
import { SearchByMovie } from 'components/SearchByMovie/SearchByMovie';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Movies() {
  const [listMovies, setListMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      setLoader(true);

      try {
        const { results } = await fetchDataByValue(query, page);
        console.log(results.length);

        if (!results.length) {
          setError(true);
          toast.error('Sorry, not found');
        }

        setListMovies(results);
      } catch (err) {
        setError(true);
        toast.error('Not found');
        if (err.code !== 'ERR_CANCELED') {
          setError(true);
          toast.error('Not found');
        }
      } finally {
        setLoader(false);
      }
    }

    fetchData();
  }, [query, page]);

  const handlerClickOnForm = evt => {
    if (evt.target[0].value.trim() === '') {
      return error && toast.error('Please, write your query.');
    }
    evt.preventDefault();
    setQuery(evt.target[0].value.trim());
    console.log(evt);

    setPage(1);
    setListMovies([]);
  };

  // const handlerClickOnLoadMore = () => {
  //   setPage(prev => prev + 1);
  // };

  return (
    <>
      <SearchByMovie onSubmit={handlerClickOnForm}></SearchByMovie>
      <ListTrends list={listMovies}></ListTrends>
    </>
  );
}
