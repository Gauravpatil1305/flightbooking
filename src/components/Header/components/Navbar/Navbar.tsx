"use client";

import React, { useState, useEffect } from "react";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import { HeaderNavbarItem } from "@/types/types";

interface NavbarProps {
  items: HeaderNavbarItem[];
  isOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ items, isOpen, toggleMenu }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      {isMobile ? (
        <MobileNavbar items={items} isOpen={isOpen} toggleMenu={toggleMenu} />
      ) : (
        <DesktopNavbar items={items} />
      )}
    </div>
  );
};

export default Navbar;
