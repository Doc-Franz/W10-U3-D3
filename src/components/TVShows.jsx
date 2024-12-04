import { Col, Container, Form, Row } from "react-bootstrap";

const TVShows = () => {
  return (
    <Container style={{ paddingTop: "75px" }}>
      <Row>
        <Col className="col-6">
          <Form.Label htmlFor="searchMvoie">
            <h3>TV Shows</h3>
          </Form.Label>
          <Form.Control type="text" id="searchMovie" placeholder="Cerca Serie TV..." />
        </Col>
      </Row>
    </Container>
  );
};

export default TVShows;
