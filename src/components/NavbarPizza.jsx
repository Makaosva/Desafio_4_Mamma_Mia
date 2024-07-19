import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../context/MyContext";

function NavbarPizza() {
  //   const { price } = useContext(MyContext);
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
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/carrito" exact className="text-white">
            {/* 🛒 $ {price} */}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPizza;
