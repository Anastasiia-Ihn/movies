import { fetchDataById } from 'API/apiById';
import { ReviewMovie } from 'components/ReviewMovie/ReviewMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function MovieById() {
  const param = useParams();
  const [movieEl, setMovieEl] = useState({});

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

  return <>{movieEl && <ReviewMovie foundEl={movieEl} />}</>;
}
