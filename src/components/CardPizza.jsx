import { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";

function CardPizza() {
  const navigate = useNavigate();
  const { pizzas, addPizzaToCard } = useContext(PizzasContext);

  console.log("pizzas Home-->", pizzas);
  //   console.log("pizza Home img-->", pizzas[0].img);

  return (
    <Row className="cardPizza">
      {pizzas.map((p, index) => (
        <Col key={index} md={3} className="p-3">
          <Card>
            <img src={p.img} alt={p.name} className="card-img-top" />
            <Card.Body>
              <Card.Title className="text-capitalize">{p.name}</Card.Title>
              <hr />
              <Card.Text>Ingredientes:</Card.Text>
              <ul variant="flush">
                {p.ingredients.map((ingredient, i) => (
                  <li key={i}>🍕 {ingredient}</li>
                ))}
              </ul>
            </Card.Body>
            <Card.Footer className="py-4">
              <h3 className="text-center">$ {p.price.toLocaleString()}</h3>
              <Button
                variant="primary"
                onClick={() => navigate(`/pizza/${p.id}`)}
              >
                Ver Más 👀
              </Button>
              <Button
                className="ms-2"
                variant="danger"
                onClick={() => addPizzaToCard(p)}
              >
                Añadir 🛒
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardPizza;
