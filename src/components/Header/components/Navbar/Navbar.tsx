"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { HeaderNavbarItem } from "@/types/types";

interface NavbarProps {
  items: HeaderNavbarItem[];
  isOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ items, isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={toggleMenu}>
          <Icon icon="mdi:close" />
        </span>
        <nav>
          <ul>
            {items.map((item) => (
              <li key={item.name}>
                <Link href={item.path} onClick={toggleMenu}>
                  <Icon icon={item.icon} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
