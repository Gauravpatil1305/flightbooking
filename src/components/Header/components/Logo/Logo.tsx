import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          src="/img/logo.png"
          alt="FlightRoutes Logo"
          width={100}
          height={30}
        />
      </Link>
    </div>
  );
};

export default Logo;
