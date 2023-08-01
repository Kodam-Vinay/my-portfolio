import GithubIcon from "../svgs/GithubIcon";
import LinkedInIcon from "../svgs/LinkedInIcon";
import EmailIcon from "../svgs/EmailIcon";

const ContactUsIcons = () => {
  const onClickMail = () => {
    var mail = "mailto:vinay.kodam112@gmail.com";
    var a = document.createElement("a");
    a.href = mail;
    a.click();
  };
  return (
    <>
      <a
        href="https://www.linkedin.com/in/vinay-kumar-kodam-4054bb21b/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon className="hover:h-10 hover:w-10 cursor-pointer" />
      </a>
      <a href="https://github.com/Kodam-Vinay" target="_blank" rel="noreferrer">
        <GithubIcon className="hover:h-10 hover:w-10 cursor-pointer" />
      </a>
      <button type="button" onClick={onClickMail}>
        <EmailIcon className="hover:h-10 hover:w-10 cursor-pointer" />
      </button>
    </>
  );
};
export default ContactUsIcons;
