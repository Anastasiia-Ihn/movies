import { Navigation } from 'components/Navigation';
import { Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <header>
        <Navigation />
      </header>

      <Outlet />
    </Container>
  );
};
