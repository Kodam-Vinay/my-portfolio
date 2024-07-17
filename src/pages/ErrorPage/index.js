import { Link } from "react-router-dom";
import ReusableButton from "../../utils/ReusableButton";

const ErrorPage = () => {
  return (
    <div className="bg-[#282C33] h-screen flex flex-col items-center justify-center space-y-10">
      <h1 className="text-white text-3xl">Oops! Page 404 Not Found</h1>
      <p className="text-white text-xl">The Page Your Looking is Not Found</p>
      <Link to="/">
        <ReusableButton name="Go Back" />
      </Link>
    </div>
  );
};
export default ErrorPage;
