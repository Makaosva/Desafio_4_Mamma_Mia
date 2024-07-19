import { useContext } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";

function Home() {
  const navigate = useNavigate();
  const { pizzas, addPizzaToCard } = useContext(MyContext);

  const goToDetails = () => {
    navigate("/pizza/:id:");
  };

  return (
    <>
      <div className="bannerHome">
        <h1>¡Pizzería Mamma Mia!</h1>
        <h6>¡Tenemos las mejores pizzas que podras encontrar!</h6>
        <hr className="linea" />
      </div>
      <Row>
        {pizzas?.map((pizza) => (
          <Col key={pizza.id} className="col-3 mt-3">
            <Card>
              <Card.Img variant="top" srce={pizza.img} alt={pizza.name} />
              <Card.Body>
                <h4 className="text-capitalize">{pizza.name}</h4>
                <hr />
                <Card.Text>Ingredientes:</Card.Text>
                <ListGroup variant="flush">
                  {pizza.ingredients.map((ingredients, i) => (
                    <ListGroup.Item
                      className="border-0 text-capitalize"
                      key={i}
                    >
                      🍕 {ingredients}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
              <Card.Footer className="py-3">
                <h2 className="text-center pt-2 pb-3">$ {pizza.price}</h2>
                <Button variant="primary" onClick={goToDetails}>
                  Ver Más 👀
                </Button>
                <Button variant="danger" onClick={() => addPizzaToCard(pizza)}>
                  Añadir 🛒
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
