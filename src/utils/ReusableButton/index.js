const ReusableButton = (props) => {
  const { className, onClick } = props;
  return (
    <button
      type={props.type}
      className={`add_zoom border border-blue-500 text-white min-h-[40px] min-w-[120px] text-base px-2 py-1 outline-none hover:text-blue-500 hover:border-white rounded-md ${className}`}
      onClick={onClick}
    >
      {props.name}
    </button>
  );
};
export default ReusableButton;
