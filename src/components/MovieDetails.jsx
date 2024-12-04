import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const movieId = params.movieId;

  const [reviews, setReviews] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");

  const fetchDetails = () => {
    fetch("http://www.omdbapi.com/?apikey=e516325e&s&i=" + movieId)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .then((reviews) => {
        setReviews(reviews.Ratings);
        setMovieTitle(reviews.Title);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container className="text-center">
      <h1 style={{ paddingTop: "75px" }}>{movieTitle}</h1>
      {reviews.map((review, index) => (
        <ListGroup className="fs-5" key={index}>
          {review.Source} : {review.Value}
        </ListGroup>
      ))}
    </Container>
  );
};

export default MovieDetails;
