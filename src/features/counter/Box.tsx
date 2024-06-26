const Box = () => {
  return (
    <div className="w-20 h-10 bg-green-200 rounded-md flex justify-center gap-2 items-center relative">
      <div className="w-[2px] h-6 bg-green-900"></div>
      <div className="w-[2px] h-6 bg-green-900"></div>
      <div className="w-[2px] h-6 bg-green-900"></div>
      <div className="w-[2px] h-6 bg-green-900"></div>
      <div className="absolute w-14 h-[2px] rotate-[-20deg] bg-green-900"></div>
    </div>
  );
};

export default Box;
