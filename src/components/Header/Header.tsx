import React from "react";

import Navbar from "./components/Navbar/Navbar";
import { navbarData } from "@/data/navbarData";

const Header = () => {
  return (
    <header>
      <Navbar items={navbarData} />
    </header>
  );
}

export default Header;