import GithubIcon from "../svgs/GithubIcon";
import LinkedInIcon from "../svgs/LinkedInIcon";
import EmailIcon from "../svgs/EmailIcon";
import { Link } from "react-router-dom";

const ContactUsIcons = (props) => {
  const { className, nohover, addBgColor } = props;
  const onClickMail = () => {
    window.location = "mailto:vinay.kodam112@gmail.com";
  };
  return (
    <div className={`${className} z-10`}>
      <Link
        to="https://www.linkedin.com/in/vinay-kumar-kodam-4054bb21b/"
        target="_blank"
      >
        <LinkedInIcon
          className={`add_zoom cursor-pointer ${nohover} ${addBgColor}`}
        />
      </Link>
      <Link
        href="https://github.com/Kodam-Vinay"
        target="_blank"
        rel="noreferrer"
      >
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
