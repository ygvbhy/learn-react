let counter = 10;

const PullUpImpure = () => {
  counter++;
  console.log("counter : ", counter);
  return <p>나는 턱걸이를 {counter}번 해봤어.</p>;
};

export default PullUpImpure;
