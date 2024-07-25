import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";

function NavbarPizza() {
  const { carrito } = useContext(PizzasContext);

  const totalAPagar = carrito.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  );

  console.log("carrito -->", carrito);
  console.log("total -->", totalAPagar);
  console.log("price -->", carrito.price);
  console.log("cantidad -->", carrito.count);

  return (
    <Navbar bg="info" variant="primary" expand="lg" className="ps-5 pe-5">
      <Navbar.Brand className=" text-white">
        <Nav.Link as={NavLink} to="/" exact className="fs-4">
          {" "}
          🍕 Pizzería Mamma Mia!
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end fw-bolder"
      >
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to="/carrito"
            exact
            className="text-white fs-4"
          >
            🛒 $ {totalAPagar.toLocaleString()}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPizza;
