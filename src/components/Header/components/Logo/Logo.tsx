import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="header-logo">
      <Link href="/">
        <Image
          src="/img/air-ticketing-logo.webp"
          alt="FlightRoutes Logo"
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
};

export default Logo;
