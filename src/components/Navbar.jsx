import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/dinoLogo128.png";
import { TbMessage } from "react-icons/tb";
import menu from "../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-black bg-opacity-10 sticky top-0 z-10 w-full max-w-7xl mx-auto py-2 px-20 flex items-center justify-between">
      <img src={logo} alt="Logo" className="h-16 w-16" />
      {/* Desktop Menu */}
      <div className="hidden text-lg font-semibold md:flex space-x-16">
        <Link
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-white cursor-pointer hover:text-green-600"
        >
          Home
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="text-white cursor-pointer hover:text-green-600"
        >
          About
        </Link>
        <Link
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="text-white cursor-pointer hover:text-green-600"
        >
          Projects
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="text-white cursor-pointer hover:text-green-600"
        >
          Experience
        </Link>
      </div>
      <button
        className="hidden md:flex items-center bg-white text-black px-8 py-4 rounded-full hover:bg-gray-300"
        onClick={() => {
          document
            .getElementById("contacts")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className="flex items-center space-x-3">
          <TbMessage size={23} />
          <span className="text-sm font-semibold">Contact me</span>
        </div>
      </button>
      {/* Mobile Menu Toggle */}
      <img
        src={menu}
        alt="Menu"
        className="md:hidden h-7 w-7 object-cover cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
      {/* Mobile Menu */}
      {/* <div
            className={`absolute top-16 right-0 bg-gray-800 rounded-lg flex flex-col space-y-2 p-4 w-64 transition-transform duration-300 ${
            showMenu ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <Link
            activeClass="text-green-400 border-b-2 border-green-400"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-white text-sm cursor-pointer hover:text-green-400"
            onClick={() => setShowMenu(false)}
            >
            Home
            </Link>
            <Link
            activeClass="text-green-400 border-b-2 border-green-400"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-sm cursor-pointer hover:text-green-400"
            onClick={() => setShowMenu(false)}
            >
            About
            </Link>
            <Link
            activeClass="text-green-400 border-b-2 border-green-400"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-sm cursor-pointer hover:text-green-400"
            onClick={() => setShowMenu(false)}
            >
            Portfolio
            </Link>
            <Link
            activeClass="text-green-400 border-b-2 border-green-400"
            to="experience"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-sm cursor-pointer hover:text-green-400"
            onClick={() => setShowMenu(false)}
            >
            Experience
            </Link>
            <Link
            activeClass="text-green-400 border-b-2 border-green-400"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-sm cursor-pointer hover:text-green-400"
            onClick={() => setShowMenu(false)}
            >
            Contacts
            </Link>
        </div> */}
    </nav>
  );
};

export default Navbar;
