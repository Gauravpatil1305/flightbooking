import React from "react";
import Link from "next/link";
import { FooterNavbarItem } from "@/types/types";

interface NavbarProps {
  items: FooterNavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <div className="navbar">
      {items.map((item) => (
        <div className="navbar-content" key={item.title}>
          <h4 className="navbar-title">{item.title}</h4>
          <ul className="navbar-list">
            {item.links.map((link) => (
              <li className="navbar-item" key={link.name}>
                <Link href={link.path}>
                  <span className="navbar-link">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
