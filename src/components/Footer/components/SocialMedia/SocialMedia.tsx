import React from "react";
import { socialMediaItem } from "@/data/socialMediaData";
import { SocialMediaItem } from "@/types/types";
import Image from "next/image";

const SocialMedia: React.FC = () => {
  return (
    <div className="footer-socialmedia">
      {socialMediaItem.map((social: SocialMediaItem) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={40}
            height={40}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
