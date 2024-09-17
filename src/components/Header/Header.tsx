import React from "react";

import Navbar from "./components/Navbar/Navbar";
import { headerNavbarData } from "@/data/headerNavbarData";

const Header = () => {
  return (
    <header>
      <Navbar items={headerNavbarData} />
    </header>
  );
}

export default Header;