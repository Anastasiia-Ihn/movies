import { fetchDataByValue } from 'API/api';
import { ListTrends } from 'components/ListTrends/ListTrends';
import { SearchByMovie } from 'components/SearchByMovie/SearchByMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams);

  const [listMovies, setListMovies] = useState([]);
  // const [query, setQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const currentQuery = searchParams.get('query') ?? '';

    if (currentQuery === '') {
      return;
    }
    async function fetchData() {
      setLoader(true);

      try {
        const { results } = await fetchDataByValue(currentQuery, page);

        if (!results.length) {
          setError(true);
          toast.error('Sorry, not found');
        }

        setListMovies(results);
      } catch (err) {
        setError(true);
        toast.error('Not found');
        // if (err.code !== 'ERR_CANCELED') {
        //   setError(true);
        //   toast.error('Not found');
        // }
      } finally {
        setLoader(false);
      }
    }

    fetchData();
  }, [page, searchParams]);

  const handlerClickOnForm = evt => {
    // evt.preventDefault();

    if (evt.target[0].value.trim() === '') {
      return error && toast.error('Please, write your query.');
    }
    console.log(searchParams);
    setSearchParams(searchParams);
    // setQuery(evt.target[0]?.value.trim());
    // console.log(evt.target[0].value);
    console.log(loader);
    setPage(1);
    // setListMovies([]);
  };
  // console.log(listMovies);

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
