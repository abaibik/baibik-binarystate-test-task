import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const { pathname } = useLocation();
  const homePath = "/";
  const detailsPath = "/details";

  return (
    <>
      <div id="sidebar">
        <h1>Aleksandra Baibik Test Task</h1>
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="me-auto w-100 nav-gap">
              <Nav.Link active={pathname === homePath} as={Link} to={homePath}>
                Home
              </Nav.Link>
              <Nav.Link
                active={pathname === detailsPath}
                as={Link}
                to={detailsPath}
              >
                Details
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
