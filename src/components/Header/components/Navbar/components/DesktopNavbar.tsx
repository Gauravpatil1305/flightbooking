"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { HeaderNavbarItem } from "@/types/types";

interface DesktopNavbarProps {
  items: HeaderNavbarItem[];
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li
            key={item.name}
            className={pathname === item.path ? "active" : ""}
          >
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

export default DesktopNavbar;
