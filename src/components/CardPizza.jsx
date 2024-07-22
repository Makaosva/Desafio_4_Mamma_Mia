import { useContext } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";

function CardPizza() {
  const navigate = useNavigate();
  const { pizzas, addPizzaToCard } = useContext(PizzasContext);

  console.log("pizzas Home-->", pizzas);

  return (
    <Row className="cardPizza">
      {pizzas?.map((p, index) => (
        <Col key={index} md={3} className="p-3">
          <Card className="p-3">
            <Card.Img variant="top" srce={p.img} alt={p.name} />
            <Card.Body>
              <Card.Title className="text-capitalize">{p.name}</Card.Title>
              <hr />
              <Card.Text>Ingredientes:</Card.Text>
              <ListGroup variant="flush">
                {p.ingredients.map((ingredient, i) => (
                  <ListGroup.Item key={i}>🍕 {ingredient}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
            <Card.Footer className="py-3">
              <h2 className="text-center">$ {p.price}</h2>
              <Button
                variant="primary"
                onClick={() => navigate(`/pizza/${p.id}`)}
              >
                Ver Más 👀
              </Button>
              <Button variant="danger" onClick={() => addPizzaToCard(p)}>
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
