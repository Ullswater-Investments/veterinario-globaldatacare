import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (hash) {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
