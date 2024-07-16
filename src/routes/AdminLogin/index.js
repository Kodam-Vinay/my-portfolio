import Cookies from "js-cookie";
import ReusableButton from "../../utils/ReusableButton";
import { useState } from "react";
import { API_URL } from "../../config";
import { Navigate, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const AdminLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFailure, setIsLoginFailure] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const jwtToken = Cookies.get("loginWebToken");
  const navigate = useNavigate();
  const storeToken = (jwt) => {
    Cookies.set("loginWebToken", jwt, {
      expires: 1,
    });
    navigate("/sercret-admin-table");
  };

  const getLogin = async () => {
    try {
      const apiUrl = API_URL + "users/login";
      const userDetails = { user_name: userName, password };
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userDetails),
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response?.ok) {
        storeToken(data?.data?.token);
      } else {
        setIsLoginFailure(true);
        setErrorMessage(data?.message);
        navigate("/error");
      }
    } catch (error) {
      navigate("/error");
    }
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (userName !== "" && password !== "") {
      getLogin();
    }
  };

  if (jwtToken !== undefined) return <Navigate to="/sercret-admin-table" />;
  return (
    <div className="flex flex-col justify-center w-full h-[96vh] items-center bg-[#282C33]">
      <form
        className="max-w-xs flex flex-col space-y-3  justify-center border py-5 pl-5 pr-1 rounded-lg"
        onSubmit={onSubmitLogin}
      >
        <h1 className="text-center font-bold text-3xl text-white mr-6">
          Login
        </h1>
        <input
          type="text"
          className="w-52 bg-transparent border p-2 outline-blue-500 text-white focus:bg-gray-800 rounded-md"
          onChange={(e) => {
            setUserName(e.target.value);
            setIsLoginFailure(false);
          }}
          value={userName}
        />
        <div className="flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            className="w-52 bg-transparent border p-2 outline-blue-500 text-white focus:bg-gray-800 rounded-md"
            onChange={(e) => {
              setPassword(e.target.value);
              setIsLoginFailure(false);
            }}
            value={password}
          />
          <button
            type="button"
            className="w-fit ml-2"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fill="white" />
            ) : (
              <AiOutlineEye fill="white" />
            )}
          </button>
        </div>
        <ReusableButton type="submit" name="Login" className="w-52" />
        <p className="text-red-600 italic">{isLoginFailure && errorMessage}</p>
      </form>
    </div>
  );
};
export default AdminLogin;
