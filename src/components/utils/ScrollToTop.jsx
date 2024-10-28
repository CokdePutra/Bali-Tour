// Import necessary hooks from React and React Router
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // Access the current location object from the router
  const { pathname } = useLocation();

  // Use useEffect to perform side effects
  useEffect(() => {
    // Scroll to the top of the window whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array includes pathname to react to changes

  // Since this component doesn't render anything visible, return null
  return null;
}
export default ScrollToTop;
