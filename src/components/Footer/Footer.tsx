import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { footerNavbarData } from "@/data/footerNavbarData";

import "./styles/Footer.scss";
import Logo from "./components/Logo/Logo";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Newsletter from "./components/Newsletter/Newsletter";
import BrandActions from "./components/BrandActions/BrandActions";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container content">
        <div className="footer-info">
          <Logo />
          <Newsletter />
          <SocialMedia />
        </div>
        <div className="footer-navbar">
          <Navbar items={footerNavbarData} />
        </div>
        <div className="footer-brand-actions">
          <BrandActions />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
