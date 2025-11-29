import { Github, Twitter, MessageSquare, type LucideIcon } from "lucide-react";

type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

type SiteConfig = {
  socialLinks: SocialLink[];
  downloadLink: string;
  donationLink: string;
  // To add a background image or GIF, simply provide its URL here.
  // For example: "https://example.com/my-background.gif"
  // To remove the background, set it to an empty string "".
  backgroundUrl: string;
};

export const siteConfig: SiteConfig = {
  socialLinks: [
    {
      name: "Discord",
      href: "https://discord.gg/RTdYYVenKD",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/Yabosen",
      icon: Github,
    },
    {
      name: "Shit",
      href: "https://yabosen.live/",
      icon: MessageSquare,
    },
  ],
  downloadLink: "https://github.com/Yabosen/MoscoviumDownload/releases/tag/V2.1",
  donationLink: "https://www.tipeeestream.com/yabosen/donation",
  backgroundUrl: "",
};
