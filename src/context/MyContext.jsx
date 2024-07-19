import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

const PizzasJson = "/pizzas.json";

const CounterProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // El archivo pizzas.json se encuentra en la carpeta public
  const getPizzas = async () => {
    const response = await fetch(PizzasJson);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const addPizzaToCard = ({ id, img, name, price }) => {
    const encontrarProducto = carrito.findIndex((p) => p.id === id);
    const producto = { id, img, name, price, count: 1 };

    if (encontrarProducto >= 0) {
      carrito[encontrarProducto].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const increment = (i) => {
    carrito[i].count++;
    setCarrito([...carrito]);
  };

  const removePizzaToCard = (i) => {
    const { count } = carrito[i];
    if (count === 1) {
      carrito.splice(i, 1);
    } else {
      carrito[i].count--;
    }
    setCarrito([...carrito]);
  };

  const globalStates = {
    pizzas,
    carrito,
    increment,
    addPizzaToCard,
    removePizzaToCard,
    getPizzas,
  };

  return (
    <MyContext.Provider values={globalStates}>{children}</MyContext.Provider>
  );
};

export default CounterProvider;
