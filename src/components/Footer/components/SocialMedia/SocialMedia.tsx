import React from "react";
import { socialMediaItem } from "@/data/socialMediaData";
import { SocialMediaItem } from "@/types/types";
import { Icon } from "@iconify/react";

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
          <Icon icon={link.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
