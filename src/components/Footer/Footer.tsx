import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { footerNavbarData } from "@/data/footerNavbarData";

import "./styles/Footer.scss";
import Logo from "./components/Logo/Logo";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Newsletter from "./components/Newsletter/Newsletter";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container content">
        <Logo />
        <Newsletter />
        <SocialMedia />
        <Navbar items={footerNavbarData} />
      </div>
    </footer>
  );
};

export default Footer;
