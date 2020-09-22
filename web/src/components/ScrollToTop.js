import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
function ScrollToTop({ children }) {
  const { pathname } = useLocation();
 
  useEffect(() => {
    if (pathname !== "/contact") window.scrollTo(0, 0);
  }, [pathname]);
 
  

  return children;
}
// window.location.reload();
 
export default ScrollToTop;