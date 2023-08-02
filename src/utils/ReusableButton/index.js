const ReusableButton = (props) => {
  return (
    <button
      className={`border border-blue-500 text-white text-base px-2 py-1 hidden md:block outline-none hover:text-blue-500 hover:border-white ${props.className}`}
    >
      {props.name}
    </button>
  );
};
export default ReusableButton;
