import { NavLink, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    color: #06490c;
  }
`;
export const AddInfo = () => {
  const param = useParams();

  return (
    <>
      <ul>
        <StyledLink to={`/movies/${param.movieById}/cast`}>
          <li>Cast</li>
        </StyledLink>
        <StyledLink to={`/movies/${param.movieById}/reviews`}>
          <li>Reviews</li>
        </StyledLink>
      </ul>
      <Outlet />
    </>
  );
};
