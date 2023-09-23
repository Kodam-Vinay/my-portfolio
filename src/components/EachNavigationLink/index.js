import { useNavigate } from "react-router-dom";
import "./style.css";
const EachNavigationLink = (props) => {
  const { naviagtionDetails, isActive } = props;
  const { id, value } = naviagtionDetails;
  const navigate = useNavigate();
  const handleClickScroll = () => {
    if (value === "/") {
      navigate("/");
      const element = document.getElementById(value);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("#" + value);
      const element = document.getElementById(value);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <li
      className={`text-[#ABB2BF] font-fira hover:text-white cursor-pointer md:add_zoom ${
        props.className
      } ${
        isActive
          ? "text-blue-500 font-bold md:border-b-2 md:border-blue-500"
          : ""
      }`}
      onClick={handleClickScroll}
    >
      {id}
    </li>
  );
};
export default EachNavigationLink;
