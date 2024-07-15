import { useEffect, useState } from "react";

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  // El archivo pizzas.json se encuentra en la carpeta public
  const getPizzas = async () => {
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div>
      <h1>App</h1>
      <pre>{JSON.stringify(pizzas, null, 2)}</pre>
    </div>
  );
};
export default App;
