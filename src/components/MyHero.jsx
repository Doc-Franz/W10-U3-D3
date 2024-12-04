import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { List, GridFill } from "react-bootstrap-icons";

const MyHero = () => {
  return (
    <Container className="text-light mt-3 bg-dark" style={{ paddingTop: "55px" }}>
      <Row className="align-items-center">
        <Col className="col-4 col-md-3 col-lg-3 d-flex justify-content-start">
          <h1 className="fs-2">TV Shows</h1>
        </Col>
        <Col className="col-4 col-md-3 col-lg-2">
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="fw-bold border border-white" style={{ borderRadius: "0" }}>
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu data-bs-theme="dark">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="d-flex justify-content-end">
          <a href="#" className="text-secondary">
            <List className="text-secondary border border-secondary" style={{ width: "30px", height: "30px", padding: "5px" }} />
          </a>
          <a href="#" className="text-secondary">
            <GridFill className="text-secondary border border-secondary" style={{ width: "30px", height: "30px", padding: "5px" }} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default MyHero;
