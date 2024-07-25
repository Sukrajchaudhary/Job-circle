import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Intrenship from "../components/Intrenship";
import Help from "../components/Help";
import Jobs from "../components/Jobs";
import FaqSection from "../components/FaqSection";
import Contact from "../components/Contact";

const Layout = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <div>
      {isRootPath && [
       
          <Navbar />,
          <Home />,
          <Intrenship />,
          <Help />,
          <Jobs />,
          <FaqSection />,
          <Contact />,
          <Footer />
       
      ]}
      {!isRootPath && [<Navbar />, <Outlet />, <Footer />]}
    </div>
  );
};

export default Layout;
