import { Link, useLocation } from 'react-router-dom';
import { ItemList, ListTrendsStyled } from './ListTrends.styled';

import { BASE_POSTER_URL } from '../../utils/constants';

const defaultImg =
  '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

export const ListTrends = ({ list }) => {
  const location = useLocation();

  return (
    <ListTrendsStyled>
      {list.map(el => (
        <ItemList key={el.id}>
          <Link to={`/movies/${el.id}`} state={{ from: location }}>
            {
              <img
                src={
                  el.poster_path
                    ? `${BASE_POSTER_URL}${el.poster_path}`
                    : defaultImg
                }
                alt={el.original_title}
                width={226}
                height={339}
              ></img>
            }
            <h3>{el.title}</h3>
          </Link>
        </ItemList>
      ))}
    </ListTrendsStyled>
  );
};
