import styled from 'styled-components';

export const ReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
    font-weight: 700;
  }
`;

export const Review = styled.div`
  margin-bottom: 20px;
`;

export const ReviewText = styled.p`
  text-align: justify;
`;
