import { fetchDataByValue } from 'API/api';
import { ListTrends } from 'components/ListTrends/ListTrends';
import { SearchByMovie } from 'components/SearchByMovie/SearchByMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    const currentQuery = searchParams.get('query') ?? '';

    if (currentQuery === '') {
      return;
    }

    async function fetchData() {
      try {
        const { results } = await fetchDataByValue(currentQuery);

        if (!results.length) {
          toast.error('Sorry, not found');
        }
        setListMovies(results);
      } catch (err) {
        toast.error('Not found');
        console.log(err.code);
        // if (err.code !== 'ERR_CANCELED') {
        //   setError(true);
        //   toast.error('Not found');
        // }
      }
    }
    fetchData();
  }, [searchParams]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchByMovie onSubmit={handleSubmit}></SearchByMovie>
      {listMovies.length > 0 && <ListTrends list={listMovies}></ListTrends>}
    </>
  );
}

// const handlerClickOnForm = evt => {
//   // evt.preventDefault();

//   if (evt.target[0].value.trim() === '') {
//     return error && toast.error('Please, write your query.');
//   }
//   console.log(searchParams);
//   setSearchParams(searchParams);
//   // setQuery(evt.target[0]?.value.trim());
//   // console.log(evt.target[0].value);
//   console.log(loader);
//   setPage(1);
//   // setListMovies([]);
// };
// console.log(listMovies);

// const handlerClickOnLoadMore = () => {
//   setPage(prev => prev + 1);
// };
