// import styled from 'styled-components';
import { ListNavStyled, StyledLink } from './Navigation.styled';

export const Navigation = () => (
  <nav>
    <ListNavStyled>
      <li>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/movies">Movies</StyledLink>
      </li>
    </ListNavStyled>
  </nav>
);
