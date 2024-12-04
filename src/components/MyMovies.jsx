import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import "../index.css";
import { Link } from "react-router-dom";

class MyMovies extends Component {
  state = {
    movies: [],
    isLoading: true
  };

  handleMovies = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e516325e&s=" + this.props.movie)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((movies) => {
        setTimeout(() => {
          this.setState({ movies: movies.Search, isLoading: false });
        }, 2000);
      })
      .catch((err) => {
        throw new Error("errore nella chiamata", err);
      });
  };

  componentDidMount() {
    this.handleMovies();
  }

  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <h2 className="fs-4">{this.props.movie}</h2>
          </Col>
        </Row>
        {this.state.isLoading ? (
          <Row>
            <Col className="d-flex flex-column align-items-center">
              <Spinner animation="border" />
              <p>Loading ...</p>
            </Col>
          </Row>
        ) : (
          <Row className="cover-grid row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-2">
            {this.state.movies.slice(0, 6).map((movie) => (
              <div key={movie.imdbID}>
                <img src={movie.Poster} key={movie.imdbID} style={{ cursor: "pointer" }} className="img-fluid" />
                <Link to={`/movie-details/${movie.imdbID}`} className="btn btn-info mt-3">
                  Details
                </Link>
              </div>
            ))}
          </Row>
        )}
      </Container>
    );
  }
}

export default MyMovies;
