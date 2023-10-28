import { fitDate } from 'helpers/fitDate';
import {
  CardMovie,
  CardMovieImg,
  CardMovieH1,
  CardMovieH2,
  CardMovieText,
} from './ReviewMovie.styled';
import { AddInfo } from 'components/AddInfo/AddInfo';

export const ReviewMovie = ({ foundEl }) => {
  const { title, genres, overview, release_date, poster_path, vote_average } =
    foundEl;

  return (
    <CardMovie>
      <div>
        <CardMovieImg
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width={200}
        />
        <CardMovieH1>
          {title} ({fitDate(release_date)})
        </CardMovieH1>
        <CardMovieText>User Score: {Math.round(vote_average)}%</CardMovieText>
        <CardMovieH2>Overview</CardMovieH2>
        <CardMovieText>{overview}</CardMovieText>
        <CardMovieH2>Genres</CardMovieH2>
        <CardMovieText>
          {genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </CardMovieText>
      </div>
      <AddInfo />
    </CardMovie>
  );
};
