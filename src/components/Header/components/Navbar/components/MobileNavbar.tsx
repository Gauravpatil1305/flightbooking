"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { HeaderNavbarItem } from "@/types/types";

interface MobileNavbarProps {
  items: HeaderNavbarItem[];
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  items,
  isOpen,
  toggleMenu,
}) => {
  const pathname = usePathname();
  return (
    <>
      <div className={`mobile-navbar ${isOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={toggleMenu}>
          <Icon icon="mdi:close" />
        </span>
        <nav>
          <ul>
            {items.map((item) => (
              <li
                key={item.name}
                className={pathname === item.path ? "active" : ""}
              >
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

export default MobileNavbar;
