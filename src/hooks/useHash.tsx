import { useState, useEffect } from "react";

export const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash.substring(1));

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.substring(1));
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash;
};
