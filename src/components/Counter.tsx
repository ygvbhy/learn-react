import { useState } from "react";

const Counter = ({ handleTotal }: { handleTotal: () => void }) => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
    handleTotal();
  };
  return <button onClick={handleCounter}>Counter: {counter}</button>;
};

export default Counter;
