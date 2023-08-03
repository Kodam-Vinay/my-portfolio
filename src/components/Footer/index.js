import ContactUsIcons from "../ContactUsIcons";
import HomeLogo from "../svgs/Homelogo";
import InstagramIcon from "../svgs/InstagramIcon";

const Footer = () => {
  return (
    <div className="font-fira p-1 xs:p-4 mt-2 sm:px-14 md:px-[80px] lg:px-[150px] text-white flex flex-col items-center space-y-3 sm:flex-row sm:justify-between">
      <div className="header-div-container flex items-center space-x-2">
        <HomeLogo />
        <p className="font-bold text-white font-fira">Vinay</p>
      </div>
      <div className="flex items-center text-xl">
        <span className="mr-2 mt-1"> © </span> VinayKumarKodam 2023
      </div>
      <div className="flex items-center">
        <ContactUsIcons
          className="flex flex-row items-center h-10"
          nohover="hover:text-base hover:h-base hover:h-8 hover:w-8"
          addBgColor="hover:bg-blue-400 hover:rounded-md hover:border"
        />
        <a
          href="https://www.instagram.com/_vinay_vinni_7/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="ml-1"
        >
          <InstagramIcon className="cursor-pointer p-1 hover:bg-blue-400 hover:rounded-md hover:border" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
