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

  console.log(movieReviews);

  return movieReviews.length === 0 ? (
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

  // movieReviews?.length !== 0 ? (
  //   <ul>
  //     {movieReviews.map(el => (
  //       <li key={el.id}>
  //         <h3>Author: {el.author}</h3>
  //         <p>{el.content}</p>
  //       </li>
  //     ))}
  //   </ul>
  // ) : (
  //   <p>Sorry, not found</p>
  // );
};
