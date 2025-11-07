import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counters/counterSlice";
const MultiCounter = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (CounterId) => {
    dispatch(increment(CounterId));
  };

  const handleDecrement = (CounterId) => {
    dispatch(decrement(CounterId));
  };

  return (
    <>
      <h2>MultiCounter</h2>
      <div>
        {counters.map((item, index) => {
          return (
            <Counter
              key={item.id}
              count={item.value}
              counterId={item.id}
              onIncrement={() => handleIncrement(item.id)}
              onDecrement={() => handleDecrement(item.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default MultiCounter;

const Counter = ({ count, counterId, onIncrement, onDecrement }) => {
  return (
    <>
      <div className="">
        <h3>{`Counter ${counterId} - Count: ${count}`}</h3>
        <button onClick={() => onIncrement()}>Increment</button>
        <button onClick={() => onDecrement()}>Decrement</button>
      </div>
    </>
  );
};
