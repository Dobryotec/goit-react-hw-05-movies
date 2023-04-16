import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  transition: color 700ms;
  text-decoration: none;

  &.active {
    color: orange;
  }
  &:hover {
    color: orange;
  }
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const Container = styled.div`
  max-width: 1800px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const Header = styled.header`
  font-family: 'Poppins', sans-serif;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 40px;
  box-shadow: 5px 5px 5px black;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  z-index: 2;
  background-color: white;
`;
export const Main = styled.main`
  padding-top: 160px;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
`;
