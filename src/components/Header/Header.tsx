"use client";

import React, { useState } from "react";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Account from "./components/Account/Account";
import { headerNavbarData } from "@/data/headerNavbarData";

import "./styles/Header.scss";
import { Icon } from "@iconify/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container content">
        <Logo />
        <button className="menu-btn" onClick={toggleMenu}>
          <Icon icon="mdi:menu" />
        </button>
        <Navbar
          items={headerNavbarData}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />
        <Account />
      </div>
    </header>
  );
};

export default Header;
