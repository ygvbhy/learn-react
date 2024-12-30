import { useState } from "react";
import Counter from "./Counter";

const Main = () => {
  const [total, setTotal] = useState(0);

  const handleTotal = () => {
    setTotal(total + 1);
  };
  return (
    <main>
      <Counter handleTotal={handleTotal} />
      <br />
      <br />
      <Counter handleTotal={handleTotal} />
      <br />
      <br />
      <p>Total: {total}</p>
    </main>
  );
};

export default Main;
