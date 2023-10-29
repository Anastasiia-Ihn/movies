import { Navigation } from 'components/Navigation/Navigation';
import { Container, HeaderStyled } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <HeaderStyled>
        <Navigation />
      </HeaderStyled>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
