import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../services/FetchFilms';
import { ReviewItem, Review, ReviewText } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map((item, index) => {
          return (
            <Review>
              <ReviewItem key={item.id}>
                {index + 1}) Author: {item.author}
              </ReviewItem>
              <ReviewText>{item.content}</ReviewText>
            </Review>
          );
        })
      ) : (
        <li>We don't have any reviews for this movie</li>
      )}
    </ul>
  );
};

export default Reviews;
