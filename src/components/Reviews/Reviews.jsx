import { fetchDataByIdForReviews } from 'API/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthorRevievs, ContentRevievs } from './Reviews.styled';

export default function Reviews() {
  const { movieById } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentQuery = searchParams;
  // console.log(currentQuery);

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
            <AuthorRevievs>Author: </AuthorRevievs> {author}
          </p>
          <ContentRevievs>{content}</ContentRevievs>
        </li>
      ))}
    </ul>
  );
}
