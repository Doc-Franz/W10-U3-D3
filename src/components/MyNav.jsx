import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import NetflixLogo from "../assets/images/netflix_logo.png";
import Avatar from "../assets/images/avatar.png";
import { Search, BellFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-dark fixed-top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">
          <img src={NetflixLogo} width="100" height="42" alt="Netflix logo" style={{ marginLeft: "-10px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link active" to="/tv-shows">
              TV Shows
            </Link>
            <Link className="nav-link" to="/">
              Movies
            </Link>
            <Link className="nav-link" to="/">
              Recently Added
            </Link>
            <Link className="nav-link" to="/">
              My List
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center ms-auto">
            <Nav.Link href="#search">
              <Search color="white" className="me-1" />
            </Nav.Link>
            <Nav.Link href="#kids" className="text-white me-1">
              KIDS
            </Nav.Link>
            <Nav.Link href="#bell">
              <BellFill color="white" className="me-1" />
            </Nav.Link>

            <NavDropdown title={<img src={Avatar} width="36.25" height="37" alt="Netflix logo" />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#exit">Exit</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
