import React, { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import {
  Button,
  Col,
  Container,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Form } from "react-router-dom";

function Carrito() {
  const { carrito, addPizzaToCard, removePizzaToCard } =
    useContext(PizzasContext);
  const precioTotal = carrito.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  );

  const precioUnitario = carrito.reduce(
    (total, pizza) => pizza.price * pizza.count,
    0
  );

  return (
    <>
      <Container className="mt-5">
        <h5>Detalles del Pedido:</h5>
        <ListGroup variant="flush" className="m-3">
          {carrito.map((item, i) => (
            <ListGroup.Item key={i}>
              <Row>
                <Col md={1}>
                  <img src={item.img} alt={item.name} className="img-fluid" />
                </Col>
                <Col md={9} className="precioCarrito">
                  <h5 className="text-capitalize">{item.name}</h5>
                  <p className="text-end m-0">${item.price.toLocaleString()}</p>
                </Col>
                <Col md={2}>
                  <InputGroup className="text-end">
                    <Button
                      variant="danger"
                      onClick={() => removePizzaToCard(item)}
                    >
                      -
                    </Button>
                    <p className="m-2 fw-bold"> {item.count} </p>
                    {/* <Form.Control aria-label="cantidad de pizzas" value="0" /> */}
                    <Button
                      variant="primary"
                      onClick={() => addPizzaToCard(item)}
                    >
                      +
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="text-start mt-4">
          <hr />
          <h3>Total: ${precioTotal.toLocaleString()}</h3>
          <Button variant="success" className="btn btn-primary mt-2">
            Ir a pagar
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Carrito;
