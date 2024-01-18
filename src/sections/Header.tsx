import Navbar from "../components/Navbar";

import logo from "../assets/harman.dev.svg";

const Header = () => {
  return (
    <header className="container py-6 lg:py-8 sticky top-0 bg-background">
      <div className="wrapper flex justify-between items-center">
        <a
          href="#home"
          className="hover:scale-105 transition-transform ease-out duration-300"
        >
          <img src={logo} alt="harman.dev logo" className="h-6" />
        </a>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
