const ReusableButton = (props) => {
  const { className } = props;
  return (
    <button
      type={props.type}
      className={`border border-blue-500 text-white text-base px-2 py-1 outline-none hover:text-blue-500 hover:border-white ${className}`}
    >
      {props.name}
    </button>
  );
};
export default ReusableButton;
