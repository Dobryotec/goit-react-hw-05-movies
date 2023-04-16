import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
  transition: all 500ms;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid orange;
  }
`;

export const Button = styled.button`
  border: 1px solid orange;
  border-radius: 10px;
  padding: 2px 15px;
  transition: background-color 700ms;
  &:hover {
    background-color: orange;
  }
`;

export const FilmItem = styled.li`
  transition: color 700ms;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &:hover {
    color: orange;
  }
`;

export const FilmList = styled.ul`
  margin-top: 40px;
`;
