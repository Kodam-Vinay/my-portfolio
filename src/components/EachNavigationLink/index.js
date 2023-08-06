import { HashLink as Link } from "react-router-hash-link";
import "./style.css";

const EachNavigationLink = (props) => {
  const { naviagtionDetails, onClickNavigationLink, isActive } = props;
  const { id, value } = naviagtionDetails;
  const onClickLink = () => {
    onClickNavigationLink(id);
  };
  const applyColor = isActive ? "apply-navigation-link-color" : "";
  return (
    <li
      className={`text-[#ABB2BF] font-fira hover:text-white cursor-pointer md:add_zoom ${props.className} ${applyColor}`}
      onClick={onClickLink}
    >
      <Link to={`#${value}`}>{id}</Link>
    </li>
  );
};
export default EachNavigationLink;
