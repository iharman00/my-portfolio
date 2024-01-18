import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { NavLink } from "./Links";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = ["about", "skills", "projects", "contact"];

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav>
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex justify-between gap-2">
        {navLinks.map((nav, index) => (
          <li key={index} className="mr-8 last:mr-0">
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
            className="fixed top-0 left-0 w-screen h-screen bg-background px-4 py-6 lg:hidden z-40"
          >
            {toggle && (
              <div className="container wrapper flex justify-end">
                <AiOutlineClose size="2rem" onClick={toggleHandler} />
              </div>
            )}
            <ul className="max-w-[80%] h-[80%] m-auto flex flex-col justify-center">
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
  );
};

export default Navbar;
