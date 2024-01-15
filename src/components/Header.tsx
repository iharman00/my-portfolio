import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { NavLink } from "./Links";
import logo from "../assets/harman.dev.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="container px-4 mx-auto py-6">
      <nav className="flex justify-between items-center">
        <a
          href="#home"
          className="hover:scale-105 transition-transform ease-out duration-300"
        >
          <img src={logo} alt="harman.dev logo" height="40" />
        </a>

        {/* Menu Icons */}
        <div onClick={toggleHandler} className="z-10 md:hidden mr-1">
          {!toggle ? (
            <AiOutlineMenu size="2rem" />
          ) : (
            <AiOutlineClose size="2rem" />
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="fixed top-0 left-0 w-screen h-screen bg-background px-4 md:hidden overflow-hidden z-[5]"
            >
              <ul className="container px-4 m-auto">
                {navLinks.map((nav) => (
                  <li key={nav}>
                    <NavLink href={`#${nav}`}>{nav}</NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-between gap-2">
          {navLinks.map((nav) => (
            <li key={nav}>
              <NavLink href={`#${nav}`}>{nav}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
