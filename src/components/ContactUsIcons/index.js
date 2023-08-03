import GithubIcon from "../svgs/GithubIcon";
import LinkedInIcon from "../svgs/LinkedInIcon";
import EmailIcon from "../svgs/EmailIcon";

const ContactUsIcons = (props) => {
  const { className, nohover, applyStroke } = props;
  const onClickMail = () => {
    window.location = "mailto:vinay.kodam112@gmail.com";
  };
  return (
    <div className={className}>
      <a
        href="https://www.linkedin.com/in/vinay-kumar-kodam-4054bb21b/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon
          className={`hover:h-10 hover:w-10 cursor-pointer ${applyStroke} ${nohover}`}
        />
      </a>
      <a href="https://github.com/Kodam-Vinay" target="_blank" rel="noreferrer">
        <GithubIcon
          className={`hover:h-10 hover:w-10 cursor-pointer ${applyStroke} ${nohover}`}
        />
      </a>
      <button type="button" onClick={onClickMail}>
        <EmailIcon
          className={`hover:h-10 hover:w-10 cursor-pointer ${applyStroke} ${nohover}`}
        />
      </button>
    </div>
  );
};
export default ContactUsIcons;
