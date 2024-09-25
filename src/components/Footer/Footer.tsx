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
        <div>
          <Logo />
          <Newsletter />
          <SocialMedia />
        </div>
        <div>
          <Navbar items={footerNavbarData} />
        </div>
        <div>
          <BrandActions />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
