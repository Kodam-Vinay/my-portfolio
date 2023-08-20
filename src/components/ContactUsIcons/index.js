import GithubIcon from "../svgs/GithubIcon";
import LinkedInIcon from "../svgs/LinkedInIcon";
import EmailIcon from "../svgs/EmailIcon";
import { Link } from "react-router-dom";
import { LINKEDIN_URL, GITHUB_URL, MAIL_URL } from "../../config";

const ContactUsIcons = (props) => {
  const { className, nohover, addBgColor } = props;
  const onClickMail = () => {
    window.location = { MAIL_URL };
  };
  return (
    <div className={`${className} z-10`}>
      <Link to={LINKEDIN_URL} target="_blank">
        <LinkedInIcon
          className={`add_zoom cursor-pointer ${nohover} ${addBgColor}`}
        />
      </Link>
      <Link to={GITHUB_URL} target="_blank" rel="noreferrer">
        <GithubIcon
          className={`add_zoom cursor-pointer ${nohover} ${addBgColor}`}
        />
      </Link>
      <button type="button" onClick={onClickMail}>
        <EmailIcon
          className={`add_zoom cursor-pointer ${nohover} ${addBgColor}`}
        />
      </button>
    </div>
  );
};
export default ContactUsIcons;
