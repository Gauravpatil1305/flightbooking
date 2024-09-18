import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { HeaderNavbarItem } from "@/types/types";

interface NavbarProps {
  items: HeaderNavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>
                <Icon icon={item.icon} />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
