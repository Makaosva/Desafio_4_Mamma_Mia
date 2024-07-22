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

  // const increment = (i) => {
  //   carrito[i].count++;
  //   setCarrito([...carrito]);
  // };

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
