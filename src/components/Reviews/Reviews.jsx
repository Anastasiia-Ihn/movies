import { fetchDataByIdForReviews } from 'API/apiByIdReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Reviews = () => {
  const param = useParams();

  const [movieReviews, setMovieReviews] = useState();

  useEffect(() => {
    async function getMobieByIdForReviews() {
      try {
        const reviews = await fetchDataByIdForReviews(param.movieById);
// console.log(reviews);

        setMovieReviews(reviews);
      } catch (error) {
        toast.error('Not found');
      }
    }

    getMobieByIdForReviews();
  }, [param.movieById]);

  // console.log(movieReviews.results.length);

  return ( movieReviews.results.length ?  <div>
    {movieReviews.results.map(el => (
      <>
        <h3>Author: {el.author}</h3>
        <p>{el.content}</p>
      </>
    ))}
  </div> : <p>Sorry, not found</p>)
};
