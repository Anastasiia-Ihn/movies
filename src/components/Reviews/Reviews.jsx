import { fetchDataByIdForReviews } from 'API/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Reviews = () => {
  const { movieById } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function getMobieByIdForReviews() {
      try {
        const reviews = await fetchDataByIdForReviews(movieById);
        setMovieReviews(reviews);
      } catch (error) {
        toast.error('Not found');
      }
    }

    getMobieByIdForReviews();
  }, [movieById]);

  return movieReviews?.length === 0 ? (
    <p>No Reviews</p>
  ) : (
    <ul>
      {movieReviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
