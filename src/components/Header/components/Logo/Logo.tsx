import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
        <Image 
          src="/img/logo.png"
          alt="FlightRoutes Logo" 
          width={100}
          height={30}
        />
    </Link>
  );
};

export default Logo;