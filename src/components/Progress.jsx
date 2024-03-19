export const Progress = ({ number, color }) => {
  return (
    <div className="flex items-center w-[113px]  gap-2 ">
      <div
        className={`flex h-2 w-full  items-center justify-center rounded-full bg-[#E0EDEA] `}
      >
        <div
          style={{ width: `${number}%`, backgroundColor: color }}
          className="transition-width mr-auto h-2 w-0 rounded-full duration-500"
        ></div>
      </div>
      <span
        className="text-lg font-medium text-center"
        style={{ color: color }}
      >
        {number}%
      </span>
    </div>
  );
};
