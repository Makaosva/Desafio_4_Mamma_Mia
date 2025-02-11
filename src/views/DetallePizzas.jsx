import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";
import { Button, Card, Col, Row } from "react-bootstrap";

function DetallePizzas() {
  const { pizzas, addPizzaToCard } = useContext(PizzasContext);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("pizzas en detalle--> ", pizzas);
  console.log("id en detalle--> ", id);

  const pizza = pizzas[pizzas.findIndex((pizzas) => pizzas.id === id)];

  return (
    <Card className="cardDet p-5">
      <Row className="cardPizza g-0">
        <Col md={5} className="p-3">
          <Card.Img className="pizzadetimg" src={pizza.img} fluid />
          {/* <img src={pizza.img} alt={pizza.name} className="card-img-start" /> */}
        </Col>
        <Col md={7} className="p-3">
          <Card.Body>
            <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
            <hr />
            <Card.Text>{pizza.desc}</Card.Text>
            <Card.Text>Ingredientes:</Card.Text>
            <ul variant="flush">
              {pizza.ingredients.map((ingredient, i) => (
                <li className="text-capitalize" key={i}>
                  🍕 {ingredient}
                </li>
              ))}
            </ul>
          </Card.Body>
          <Card.Footer className="py-3 footdetpizza">
            <h2>Precio: ${pizza.price.toLocaleString()}</h2>
            <Button variant="danger" onClick={() => addPizzaToCard(pizza)}>
              Añadir 🛒
            </Button>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  );
}

export default DetallePizzas;
