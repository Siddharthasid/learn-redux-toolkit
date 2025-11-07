import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
} from "../features/simpleCounters/simpleCounerSlice";

const SimpleCounter = () => {
  const count = useSelector((state) => state.simpleCounter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="">
        <h2>Counter Value: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy(5))}>Increment By 5</button>
        <button onClick={() => dispatch(decrementBy(5))}>Decrement by 5</button>
      </div>
    </>
  );
};

export default SimpleCounter;
