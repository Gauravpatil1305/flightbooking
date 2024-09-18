import React from "react";

import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Account from "./components/Account/Account";
import { headerNavbarData } from "@/data/headerNavbarData";

import "./styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container content">
        <Logo />
        <Navbar items={headerNavbarData} />
        <Account />
      </div>
    </header>
  );
};

export default Header;
