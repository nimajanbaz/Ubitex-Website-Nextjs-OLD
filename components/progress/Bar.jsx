export const Bar = ({ animationDuration, progress }) => {
  return (
    <div
      className="bg-[#f39200] w-full h-1 top-0 left-0 fixed z-50"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}></div>
  );
};
