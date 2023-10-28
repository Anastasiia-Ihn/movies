import { Navigation } from 'components/Navigation';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
