"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FooterNavbarItem } from "@/types/types";
import { Icon } from '@iconify/react'; 

interface NavbarProps {
  items: FooterNavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="navbar">
      {items.map((item, index) => (
        <div className="navbar-content" key={item.title}>
          <h4
            className="navbar-title"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span className={`navbar-icon ${openIndex === index ? "open" : ""}`}>
              <Icon icon="mingcute:down-fill" width={30} height={30} />
            </span>
          </h4>
          <ul className={`navbar-list ${openIndex === index ? "open" : ""}`}>
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
