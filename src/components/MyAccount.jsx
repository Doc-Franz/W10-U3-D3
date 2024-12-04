import { Component } from "react";
import { Button, Col, Container, Dropdown, Navbar, Row } from "react-bootstrap";
import NetflixLogo from "../assets/images/netflix_logo.png";
import KidsIcon from "../assets/images/kids_icon.png";
import { CheckSquare } from "react-bootstrap-icons";

class MyAccount extends Component {
  render() {
    return (
      <>
        <Container>
          {" "}
          <Navbar.Brand href="#">
            <img src={NetflixLogo} width="100" height="42" alt="Netflix logo" style={{ marginLeft: "-10px" }} />
          </Navbar.Brand>
        </Container>
        <Container style={{ paddingInline: "10%" }}>
          <Container style={{ marginTop: "100px", fontSize: "4rem" }}>
            <Row>
              <Col>
                Edit Profile <hr className="border-1" />
              </Col>
            </Row>
          </Container>
          <Container className="text-secondary">
            <Row>
              <Col>
                <img src={KidsIcon} alt="..." className="img-fluid" />
              </Col>
              <Col>
                <p id="strive-student" className="text-white fs-5 p-1" style={{ backgroundColor: "#666666" }}>
                  Strive Student
                </p>
                <Row>
                  <Col>
                    <p className="mb-1 fs-5 text-white-50">Language:</p>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic" className="fw-bold border border-white" style={{ borderRadius: "0" }}>
                        English
                      </Dropdown.Toggle>

                      <Dropdown.Menu data-bs-theme="dark">
                        <Dropdown.Item href="#/italian">Italian</Dropdown.Item>
                        <Dropdown.Item href="#/french">French</Dropdown.Item>
                        <Dropdown.Item href="#/spanish">Spanish</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
                <hr className="border-1" />
                <p className="mb-3 fs5 text-white-50">Maturity Setting</p>
                <Row>
                  <Col>
                    <Button className="btn text-white p-1 px-2 mb-3" style={{ borderRadius: "2px", backgroundColor: "#474646" }}>
                      ALL MATURITY RATINGS
                    </Button>
                  </Col>
                  <p className="text-white mb-4">Show titles of all maturity ratings for this profile</p>
                  <Row>
                    <Col>
                      <Button className="btn btn-dark border-secondary text-secondary px-4 mb-2" style={{ borderRadius: "0" }}>
                        EDIT
                      </Button>
                    </Col>
                  </Row>
                  <hr className="border-1" />
                  <p className="mb-3 fs-5 text-white-50">Autoplay controls</p>
                  <div className="autoplay d-flex align-items-middle">
                    <CheckSquare className="fs-3 me-2" style={{ cursor: "pointer" }} />
                    <p className="text-white mb-4">Autoplay next episode in a series on all devices</p>
                  </div>
                  <div className="autoplay d-flex align-items-middle">
                    <CheckSquare className="fs-3 me-2" style={{ cursor: "pointer" }} />
                    <p className="text-white mb-4">Autoplay next episode in a series on all devices</p>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <hr className="border-1" />
                <div className="action d-flex justify-content-between flex-wrap">
                  <Button className="btn btn-dark border-secondary btn-light fs-5 px-4 mb-2" style={{ borderRadius: "0" }}>
                    SAVE
                  </Button>
                  <Button className="btn btn-dark border-secondary text-secondary fs-5 px-4 mb-2" style={{ borderRadius: "0" }}>
                    CANCEL
                  </Button>
                  <Button className="btn btn-dark border-secondary text-secondary fs-5 px-4 mb-2" style={{ borderRadius: "0" }}>
                    DELETE PROFILE
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}

export default MyAccount;
