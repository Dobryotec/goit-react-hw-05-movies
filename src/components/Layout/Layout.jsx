import { Outlet } from 'react-router-dom';
import { StyledLink, Container, Header, Main } from './Layout.styled';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
