import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ListAddInfoStyled } from './AddInfo.styled';

const StyledLink = styled(NavLink)`
  &.active {
    color: #06490c;
  }
`;
export const AddInfo = () => {
  const param = useParams();
  const location = useLocation();
  const cameFrom = location?.state?.from ?? '/';

  return (
    <>
      Additional information
      <ListAddInfoStyled>
        <li>
          <StyledLink
            to={`/movies/${param.movieById}/cast`}
            state={{ from: cameFrom }}
          >
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to={`/movies/${param.movieById}/reviews`}
            state={{ from: cameFrom }}
          >
            Reviews
          </StyledLink>
        </li>
      </ListAddInfoStyled>
      <Outlet />
    </>
  );
};
