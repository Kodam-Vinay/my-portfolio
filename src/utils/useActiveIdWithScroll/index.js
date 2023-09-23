import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useActiveIdWithScroll = (navligationLinksList, setActiveId) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const navigate = useNavigate();
  const handleScroll = () => {
    if (window.innerWidth < 650) {
      if (window.scrollY <= 620) {
        setActiveId(navligationLinksList[0].value);
        navigate(navligationLinksList[0].value);
      } else if (window.scrollY >= 1740 && window.scrollY < 6100) {
        setActiveId(navligationLinksList[1].value);
        navigate("#" + navligationLinksList[1].value);
      } else if (window.scrollY >= 6100 && window.scrollY < 6400) {
        setActiveId(navligationLinksList[2].value);
        navigate("#" + navligationLinksList[2].value);
      } else if (window.scrollY >= 6400) {
        setActiveId(navligationLinksList[3].value);
        navigate("#" + navligationLinksList[3].value);
      }
    } else if (window.innerWidth >= 850 && window.innerWidth < 1250) {
      if (window.scrollY <= 370) {
        setActiveId(navligationLinksList[0].value);
        navigate(navligationLinksList[0].value);
      } else if (window.scrollY >= 1000 && window.scrollY < 3000) {
        setActiveId(navligationLinksList[1].value);
        navigate("#" + navligationLinksList[1].value);
      } else if (window.scrollY >= 3300 && window.scrollY < 3650) {
        setActiveId(navligationLinksList[2].value);
        navigate("#" + navligationLinksList[2].value);
      } else if (window.scrollY >= 3650) {
        setActiveId(navligationLinksList[3].value);
        navigate("#" + navligationLinksList[3].value);
      }
    } else if (window.innerWidth >= 1250 && window.innerWidth < 1340) {
      if (window.scrollY <= 390) {
        setActiveId(navligationLinksList[0].value);
        navigate(navligationLinksList[0].value);
      } else if (window.scrollY >= 1000 && window.scrollY < 3200) {
        setActiveId(navligationLinksList[1].value);
        navigate("#" + navligationLinksList[1].value);
      } else if (window.scrollY >= 3200 && window.scrollY < 3500) {
        setActiveId(navligationLinksList[2].value);
        navigate("#" + navligationLinksList[2].value);
      } else if (window.scrollY >= 3500) {
        setActiveId(navligationLinksList[3].value);
        navigate("#" + navligationLinksList[3].value);
      }
    } else if (window.innerWidth > 1340 && window.innerWidth < 1500) {
      if (window.scrollY <= 390) {
        setActiveId(navligationLinksList[0].value);
        navigate(navligationLinksList[0].value);
      } else if (window.scrollY >= 1050 && window.scrollY < 2700) {
        setActiveId(navligationLinksList[1].value);
        navigate("#" + navligationLinksList[1].value);
      } else if (window.scrollY >= 2700 && window.scrollY < 3000) {
        setActiveId(navligationLinksList[2].value);
        navigate("#" + navligationLinksList[2].value);
      } else if (window.scrollY >= 3000) {
        setActiveId(navligationLinksList[3].value);
        navigate("#" + navligationLinksList[3].value);
      }
    } else {
      if (window.scrollY <= 380) {
        setActiveId(navligationLinksList[0].value);
        navigate(navligationLinksList[0].value);
      } else if (window.scrollY >= 800 && window.scrollY < 2500) {
        setActiveId(navligationLinksList[1].value);
        navigate("#" + navligationLinksList[1].value);
      } else if (window.scrollY >= 2500 && window.scrollY < 2800) {
        setActiveId(navligationLinksList[2].value);
        navigate("#" + navligationLinksList[2].value);
      } else if (window.scrollY >= 2800) {
        setActiveId(navligationLinksList[3].value);
        navigate("#" + navligationLinksList[3].value);
      }
    }
  };
};
export default useActiveIdWithScroll;
