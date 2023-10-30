import { NavLink, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ListAddInfoStyled } from './AddInfo.styled';

const StyledLink = styled(NavLink)`
  &.active {
    color: #06490c;
  }
`;
export const AddInfo = () => {
  const param = useParams();

  return (
    <>
      Additional information
      <ListAddInfoStyled>
        <li>
          <StyledLink to={`/movies/${param.movieById}/cast`}>Cast</StyledLink>
        </li>
        <li>
          <StyledLink to={`/movies/${param.movieById}/reviews`}>
            Reviews
          </StyledLink>
        </li>
      </ListAddInfoStyled>
      <Outlet />
    </>
  );
};
