import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import "../index.css";

const MyFooter = () => {
  return (
    <Container className="text-secondary m-6" style={{ marginTop: "120px", paddingInline: "10%" }}>
      <Row className="mb-3">
        <Col className="d-flex">
          <Facebook className="fs-3 me-3" style={{ cursor: "pointer" }} />
          <Instagram className="fs-3 me-3" style={{ cursor: "pointer" }} />
          <Twitter className="fs-3 me-3" style={{ cursor: "pointer" }} />
          <Youtube className="fs-3 me-3" style={{ cursor: "pointer" }} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="d-flex flex-column ">
          <p className="text-secondary" style={{ cursor: "pointer" }}>
            Audio and Subtitles
          </p>
          <p className="text-secondary text" style={{ cursor: "pointer" }}>
            Media Center
          </p>
          <p className="text-secondary " style={{ cursor: "pointer" }}>
            Privacy
          </p>
          <p className="text-secondary" style={{ cursor: "pointer" }}>
            Contact us
          </p>
        </Col>
        <Col className="d-flex flex-column ">
          <p className="text-secondary" style={{ cursor: "pointer" }}>
            Audio Description
          </p>
          <p className="text-secondary " style={{ cursor: "pointer" }}>
            Investor Relations
          </p>
          <p className="text-secondary " style={{ cursor: "pointer" }}>
            Legal Notices
          </p>
        </Col>
        <Col className="d-flex flex-column">
          <p className="text-secondary " style={{ cursor: "pointer" }}>
            Help center
          </p>
          <p className="text-secondary " style={{ cursor: "pointer" }}>
            Jobs
          </p>
          <p className="text-secondary " style={{ cursor: "pointer" }}>
            Cookie Preferences
          </p>
        </Col>
        <Col className="d-flex flex-column">
          <p className="text-secondary " style={{ cursor: "pointer" }}>
            Gift Cards
          </p>
          <p className="text-secondary " style={{ cursor: "pointer" }}>
            Terms of use
          </p>
          <p className="text-secondary " style={{ cursor: "pointer" }}>
            Corporate Information
          </p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Button className="btn btn-dark text-secondary border border-secondary" style={{ borderRadius: "0" }}>
            Service Code
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col style={{ fontSize: "0.85rem" }}>&copy; 1997-2019 Netflix, Inc. i - j4uj48d83j3oO</Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
