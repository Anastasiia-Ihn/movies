import { Link, useLocation } from 'react-router-dom';
import { ItemList, ListTrendsStyled } from './ListTrends.styled';

export const ListTrends = ({ list }) => {
  console.log(list);
  const location = useLocation();

  return (
    <ListTrendsStyled>
      {list.map(el => (
        <ItemList key={el.id}>
          {
            <img
              src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
              alt={el.original_title}
              width={226}
              height={339}
            ></img>
          }
          <Link to={`/movies/${el.id}`} state={{ from: location }}>
            <h3>{el.title}</h3>
          </Link>
        </ItemList>
      ))}
    </ListTrendsStyled>
  );
};
