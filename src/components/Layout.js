import React from "react";
import { useLocation } from "react-router-dom";
import NavbarHeader from "./NavbarHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideNavbarAndFooter = location.pathname === "/dashboard";

  return (
    <>
      {!hideNavbarAndFooter && <NavbarHeader />}
      {children}
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
};

export default Layout;
