const ReusableInput = (props) => {
  const { placeholder, className, onChange, type, value } = props;
  return (
    <input
      type={type}
      className={`bg-transparent border p-2 w-full outline-blue-500 text-white ${className} focus:bg-gray-800 rounded-md`}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};
export default ReusableInput;
