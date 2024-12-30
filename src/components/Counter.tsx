import { useState } from "react";

const Counter = ({ handleTotal }: { handleTotal: () => void }) => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
    // 스냅샷으로 인해 counter 는 렌더링 됐을때의 값으로 지정이 된다.
    // 따라서 setCounter 가 3번 호출 되도 0 + 1 이 실행 된다.
    // 이를 해결하기 위해서는 함수형 업데이트를 사용해야 한다.
    // setCounter((prevCounter) => prevCounter + 1); 전의 값 + 1
    // 함수형 업데이트는 스냅샷을 사용하지 않는다.
    // 따라서 함수형 업데이트를 사용하면 최신 값을 사용할 수 있다.
    handleTotal();
  };
  return <button onClick={handleCounter}>Counter: {counter}</button>;
};

export default Counter;
