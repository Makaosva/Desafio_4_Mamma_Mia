import { createContext, useState, useEffect } from "react";

export const PizzasContext = createContext();

// const PizzasJson = "/pizzas.json";

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // El archivo pizzas.json se encuentra en la carpeta public
  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const data = await res.json();
    setPizzas(data);
  };

  console.log("pizzas en Context-->", pizzas);

  useEffect(() => {
    getPizzas();
  }, []);

  const addPizzaToCard = ({ id, img, name, price }) => {
    const producto = { id, img, name, price, count: 1 };
    const encontrarProducto = carrito.findIndex((p) => p.id === id);

    if (encontrarProducto >= 0) {
      carrito[encontrarProducto].count++;
      setCarrito([...carrito]);
    } else {
      producto.count = 1;
      setCarrito([...carrito, producto]);
    }
  };

  const removePizzaToCard = (i) => {
    const index = carrito.findIndex((orden) => orden.id === i.id);
    if (index >= 0) {
      if (carrito[index].count > 1) {
        carrito[index].count--;
        setCarrito([...carrito]);
      } else {
        const nuevoCarrito = carrito.filter((item) => item.id != i.id);
        setCarrito(nuevoCarrito);
      }
    } else {
      console.log("Borrado");
    }
  };

  const globalStates = {
    pizzas,
    carrito,
    // increment,
    addPizzaToCard,
    removePizzaToCard,
    getPizzas,
  };

  return (
    // <PizzasContext.Provider value={{ globalStates }}>
    <PizzasContext.Provider
      value={{
        pizzas,
        carrito,
        addPizzaToCard,
        removePizzaToCard,
        getPizzas,
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
