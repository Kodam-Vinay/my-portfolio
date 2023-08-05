//to check wheather the user is connected to internet or not by using eventListeners(online, offline)
import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState(true);
  useEffect(() => {
    const checkOnline = () => {
      setOnline(true);
    };
    const checkOffline = () => {
      setOnline(false);
    };
    window.addEventListener("online", checkOnline);
    window.addEventListener("offline", checkOffline);
    return () => {
      window.removeEventListener("online", checkOnline);
      window.removeEventListener("offline", checkOffline);
    };
  });
  return isOnline;
};

export default useOnline;
