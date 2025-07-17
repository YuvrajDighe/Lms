// src/component/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi pathname change hoga, scroll top pe jayega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
