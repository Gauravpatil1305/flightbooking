import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { footerNavbarData } from "@/data/footerNavbarData";

const Footer = () => {
  return (
    <footer>
      <Navbar items={footerNavbarData} />
    </footer>
  );
};

export default Footer;