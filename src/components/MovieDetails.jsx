import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const movieId = params.movieId;

  const [reviews, setReviews] = useState([]);
  const [movie, setMovie] = useState("");

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
        setMovie(reviews);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container className="text-center">
      <h1 style={{ paddingTop: "75px" }} className="mb-3">
        {movie.Title}
      </h1>
      <img src={movie.Poster} style={{ cursor: "pointer" }} />
      <ListGroup className="fs-5">Year: {movie.Year}</ListGroup>
      <ListGroup className="fs-5">Runtime: {movie.Runtime}</ListGroup>
      <ListGroup className="fs-5">Genre: {movie.Genre}</ListGroup>
      <ListGroup className="fs-5">Director: {movie.Director}</ListGroup>
      <ListGroup className="fs-5 mb-3">Writer: {movie.Writer}</ListGroup>
      <h2 className="text-success">Reviews</h2>
      {reviews.map((review, index) => (
        <ListGroup className="fs-5" key={index}>
          {review.Source} : {review.Value}
        </ListGroup>
      ))}
      <hr />
    </Container>
  );
};

export default MovieDetails;
