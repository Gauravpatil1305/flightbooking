import React from "react";
import { socialMediaItem } from "@/data/socialMediaData";
import { SocialMediaItem } from "@/types/types";
import Image from "next/image";

const SocialMedia: React.FC = () => {
  return (
    <div>
      {socialMediaItem.map((link: SocialMediaItem) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={link.icon}
            alt={link.name}
            width={24}
            height={24}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
