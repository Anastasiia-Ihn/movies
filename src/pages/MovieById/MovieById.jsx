import { fetchDataById } from 'API/api';
import { ReviewMovie } from 'components/ReviewMovie/ReviewMovie.jsx';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BackLink } from './MovieById.styled';
import { BiArrowBack } from 'react-icons/bi';

export default function MovieById() {
  const param = useParams();
  const [movieEl, setMovieEl] = useState({});
  const location = useLocation();
  useEffect(() => {
    async function getMobieById() {
      try {
        const movie = await fetchDataById(param.movieById);
        setMovieEl(movie);
      } catch (error) {
        toast.error('Not found');
      }
    }

    getMobieById();
  }, [param.movieById]);

  return (
    <>
      <BackLink to={location.state?.from ?? '/movies'}>
        <BiArrowBack /> Go back
      </BackLink>
      {movieEl && <ReviewMovie foundEl={movieEl} />}
    </>
  );
}
