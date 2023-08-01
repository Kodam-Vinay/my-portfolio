const HeadingReusableCode = (props) => {
  const { name } = props;
  return (
    <div className="flex items-center">
      <h1 className="text-2xl md:text-3xl font-bold font-fira text-white">
        <span className="text-blue-500">#</span>
        {name}
      </h1>
      <hr className="w-[40%] sm:w-[30%] md:w-[10%] ml-4 border-blue-500 border-1" />
    </div>
  );
};
export default HeadingReusableCode;
