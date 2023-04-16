import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  outline: none;
  border: 1px solid orange;
  border-radius: 10px;
  padding: 5px 15px;
  background-color: orange;
  opacity: 0.5;
  transition: opacity 700ms;
  margin-bottom: 20px;
  &:hover {
    opacity: 1;
  }
`;

export const SectionFilm = styled.div`
  display: flex;
  column-gap: 40px;
  margin-bottom: 10px;
`;

export const SectionBody = styled.div`
  padding-top: 130px;
  display: flex;
  flex-direction: column;

  row-gap: 40px;
`;

export const SectionBodyTitle = styled.h1`
  font-weight: 700;
  font-size: 40px;
`;
export const SectionBodySubTitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
`;
export const SectionBodyText = styled.p`
  text-align: justify;
  line-height: 1.3;
`;

export const SectionInformation = styled.div`
  padding-left: 40px;
  padding-top: 50px;
  padding-bottom: 50px;
  box-shadow: 5px 5px 5px 5px black;
  margin-bottom: 40px;
`;

export const SectionInformationTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
`;
export const SectionNavInformation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  transition: color 700ms;
  &:hover {
    color: orange;
  }
`;
export const StyledImg = styled.img`
  border-radius: 5px;
`;
