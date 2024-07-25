// Navbar.js
import { AlignJustify, CircleDot } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[rgb(23,23,31)] sticky top-0 z-50 p-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center">
          <Link to="/" className="flex justify-center items-center gap-2">
            <div className="hover:translate-x-1 transition-all">
              <CircleDot size={36} color="#267d38" strokeWidth={3} />
            </div>
            <h1 className="text-[#FFFFFF] font-extrabold font-sans tracking-wider text-xl">
              JOB CIRCLE
            </h1>
          </Link>
          <div className="hidden md:flex">
            <ul className="flex justify-between items-center gap-10 text-white">
              <li className="font-semibold text-xl cursor-pointer hover:text-green-600">
                Home
              </li>
              <li className="font-semibold text-xl cursor-pointer hover:text-green-600">
                About
              </li>
              <li className="font-semibold text-xl cursor-pointer hover:text-green-600">
                Contact
              </li>
              <Link to="/Login"><button className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-full">
                LOGIN
              </button></Link>
            </ul>
          </div>
          <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
            <AlignJustify size={36} color="#fcfcfc" strokeWidth={3} />
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-3`}>
          <ul className="left-0 flex absolute h-screen bg-[rgb(23,23,31)]  w-full flex-col items-start  pl-10 gap-4 text-white">
            <li className="font-semibold text-xl cursor-pointer hover:text-green-600">
              Home
            </li>
            <li className="font-semibold text-xl cursor-pointer hover:text-green-600">
              About
            </li>
            <li className="font-semibold text-xl cursor-pointer hover:text-green-600">
              Contact
            </li>
            <Link to="/Login"><button className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-full">
                LOGIN
              </button></Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
