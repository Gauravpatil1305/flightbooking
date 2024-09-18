import React from "react";

import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Account from "./components/Account/Account";
import { headerNavbarData } from "@/data/headerNavbarData";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar items={headerNavbarData} />
      <Account />
    </header>
  );
}

export default Header;