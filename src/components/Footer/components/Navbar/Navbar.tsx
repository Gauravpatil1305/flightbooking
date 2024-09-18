import React from "react";
import Link from "next/link";
import { FooterNavbarItem } from "@/types/types";

interface NavbarProps {
  items: FooterNavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.title}>
          <h4>{item.title}</h4>
          <ul>
            {item.links.map((link) => (
              <li key={link.name}>
                <Link href={link.path}>
                  <span>{link.name}</span>
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
