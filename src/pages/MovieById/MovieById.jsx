import { fetchDataById } from 'API/api';
import { ReviewMovie } from 'components/ReviewMovie/ReviewMovie.jsx';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BackLink } from './MovieById.styled';
import { BiArrowBack } from 'react-icons/bi';

export default function MovieById() {
  const { movieById } = useParams();
  const [movieEl, setMovieEl] = useState({});
  const location = useLocation();
  useEffect(() => {
    if (!movieById) return;

    async function getMobieById() {
      try {
        const movie = await fetchDataById(movieById);
        setMovieEl(movie);
      } catch (error) {
        toast.error('Not found');
      }
    }

    getMobieById();
  }, [movieById]);

  return (
    <>
      <BackLink to={location.state?.from ?? '/movies'}>
        <BiArrowBack /> Go back
      </BackLink>
      {movieEl && <ReviewMovie foundEl={movieEl} />}
    </>
  );
}
