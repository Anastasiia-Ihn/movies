import { fetchDataById } from 'API/api';
import { ReviewMovie } from 'components/ReviewMovie/ReviewMovie.jsx';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function MovieById() {
  const param = useParams();
  const [movieEl, setMovieEl] = useState({});
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    async function getMobieById() {
      try {
        const movie = await fetchDataById(param.movieById);
        setMovieEl(movie);
        console.log(movie);
      } catch (error) {
        toast.error('Not found');
      }
    }

    getMobieById();
  }, [param.movieById]);

  return (
    <>
      <Link to={location.state?.from ?? '/movies'}>Go back</Link>
      {movieEl && <ReviewMovie foundEl={movieEl} />}
    </>
  );
}
