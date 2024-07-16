import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarPizza() {
  
  return (
    <Navbar bg="info" variant="primary" expand="lg" className="ps-5">
      <Navbar.Brand className="fw-bolder text-white">
        {" "}
        🍕 Pizzería Mamma Mia!
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-contect-end fw-bolder"
      >
        <Nav className="mr-auto text-white">
          <Nav.Link as={NavLink} to="/carrito" exact className="text-white">
            🛒 $
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPizza;
