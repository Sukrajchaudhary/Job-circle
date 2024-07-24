// Layout.js
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Intrenship from "./components/Intrenship";
import Help from "./components/Help";
import Jobs from "./components/Jobs";
import FaqSection from "./components/FaqSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <div >
      <Navbar />
      <Home />
      <Intrenship/>
      <Help/>
      <Jobs/>
      <FaqSection/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Layout;