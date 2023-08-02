const ReusableInput = (props) => {
  const { placeholder, className, onChange, type, value } = props;
  return (
    <input
      type={type}
      className={`bg-transparent border p-2 w-full outline-blue-500 text-white ${className}`}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      required
    />
  );
};
export default ReusableInput;
