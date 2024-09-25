"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { marketLinks } from "@/data/marketData";

const BrandActions: React.FC = () => {
  return (
    <div>
      <div>
        <p>© 2024 Flight Routes</p>
      </div>
      <div>
        {marketLinks.map((market) => (
          <a
            key={market.name}
            href={market.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={market.name}
          >
            <Icon icon={market.icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BrandActions;
