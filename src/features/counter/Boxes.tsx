import { useAppSelector } from '../../redux/hooks';
import Box from './Box';

const Boxes = () => {
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="flex flex-wrap gap-5 items center border border-purple bg-slate-50 rounded-md p-10">
      {/* Create a box for each 5 count */}
      {Array(Math.floor(count / 5)).fill(<Box />)}
    </div>
  );
};

export default Boxes;
