import { Outlet } from 'react-router-dom';
import { StyledLink, Container, Header, Main } from './Layout.styled';
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
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
