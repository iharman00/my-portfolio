import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { NavLink } from "./Links";
import logo from "../assets/harman.dev.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = ["about", "skills", "projects", "contact"];

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="container py-6 lg:py-8 sticky top-0 bg-background">
      <nav className="wrapper flex justify-between items-center">
        <a
          href="#home"
          className="hover:scale-105 transition-transform ease-out duration-300"
        >
          <img src={logo} alt="harman.dev logo" className="h-6" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-between gap-2">
          {navLinks.map((nav) => (
            <li key={nav} className="mr-8 last:mr-0">
              <NavLink href={`#${nav}`}>{nav}</NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        {!toggle && (
          <AiOutlineMenu
            size="2rem"
            className="lg:hidden mr-1"
            onClick={toggleHandler}
          />
        )}

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              className="fixed top-0 left-0 w-screen h-screen bg-background px-4 py-6 lg:hidden z-50 flex justify-start items-center"
            >
              {toggle && (
                <AiOutlineClose
                  size="2rem"
                  className="fixed top-0 right-0 z-10 lg:hidden mt-6 mr-5"
                  onClick={toggleHandler}
                />
              )}
              <ul>
                {navLinks.map((nav) => (
                  <li key={nav} className="mb-4 last:mb-0">
                    <NavLink href={`#${nav}`} onClick={toggleHandler}>
                      {nav}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
