import { Route, Routes } from "react-router-dom";
import NavbarPizza from "./components/NavbarPizza";
import Home from "./views/Home";
import DetallePizzas from "./views/DetallePizzas";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzasProvider from "./context/PizzasContext";

const App = () => {
  return (
    <PizzasProvider>
      <NavbarPizza />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<DetallePizzas />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <h1>App</h1>
      {/* <pre>{JSON.stringify(pizzas, null, 2)}</pre> */}
    </PizzasProvider>
  );
};
export default App;
