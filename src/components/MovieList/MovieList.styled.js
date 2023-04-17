import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  transition: color 500ms;
  &:hover {
    color: orange;
  }
`;

export const FilmItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FilmList = styled.ul`
  margin-top: 30px;
`;
