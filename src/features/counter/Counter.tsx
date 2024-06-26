import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Boxes from './Boxes';
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from './counterSlice';

const Counter = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="space-y-10 max-w-3xl">
      <div className="flex gap-10 items center border border-purple bg-slate-50 rounded-md p-10">
        <button
          onClick={() => dispatch(decrementByValue({ value: 5 }))}
          className="w-40 px-3 py-2 bg-red-800 text-white font-semibold text-2xl rounded-md"
        >
          Dec. 5
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="w-40 px-3 py-2 bg-red-400 text-white font-semibold text-2xl rounded-md"
        >
          Dec.
        </button>
        <h1 className="text-3xl w-12 text-center">{count}</h1>
        <button
          onClick={() => dispatch(increment())}
          className="w-40 px-3 py-2 bg-green-400 text-white font-semibold text-2xl rounded-md"
        >
          Inc.
        </button>

        <button
          onClick={() => dispatch(incrementByValue({ value: 5 }))}
          className="w-40 px-3 py-2 bg-green-800 text-white font-semibold text-2xl rounded-md"
        >
          Inc. 5
        </button>
      </div>
      <Boxes />
    </div>
  );
};

export default Counter;
