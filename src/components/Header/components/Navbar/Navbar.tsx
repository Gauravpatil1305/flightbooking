import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { NavbarItem } from "@/types/types";

interface NavbarProps {
  items: NavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
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
  );
};

export default Navbar;
