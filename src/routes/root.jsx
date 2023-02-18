import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  const classNameGenerator = ({ isActive, isPending }) =>
    isActive ? "active" : isPending ? "pending" : "";

  return (
    <>
      <div id="sidebar">
        <h1>Aleksandra Baibik Test Task</h1>
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="me-auto">
              <Nav.Link>
                <Link className={classNameGenerator} to={"/home"}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/details"}>Details</Link>
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
