import { Outlet } from "react-router-dom";

import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
