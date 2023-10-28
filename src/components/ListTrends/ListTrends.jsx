import { Link } from 'react-router-dom';
import { ItemList, ListTrendsStyled } from './ListTrends.styled';

export const ListTrends = ({ list }) => {
  return (
    <ListTrendsStyled>
      {list.map(el => (
        <ItemList key={el.id}>
          {
            <img
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              alt={el.original_title}
              width={200}
            ></img>
          }
          <Link to={`/movies/${el.id}`}>
            <h3>{el.title}</h3>
          </Link>
        </ItemList>
      ))}
    </ListTrendsStyled>
  );
};
