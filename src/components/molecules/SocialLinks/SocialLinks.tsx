"use client";

import { Flex } from "antd";
import { SocialIcon } from "@/components/atoms";
import { socialLinks } from "@/lib/content";

type SocialLinksProps = {
  inverted?: boolean;
  size?: number;
};

export default function SocialLinks({ inverted = false, size = 18 }: SocialLinksProps) {
  return (
    <Flex align="center" gap="small">
      {socialLinks.map((social) => (
        <a
          key={social.platform}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`MetaFab Systems on ${social.platform}`}
          className={`social-link${inverted ? " social-link-inverted" : ""}`}
          style={{ width: 36, height: 36 }}
        >
          <SocialIcon platform={social.platform} size={size} />
        </a>
      ))}
    </Flex>
  );
}
