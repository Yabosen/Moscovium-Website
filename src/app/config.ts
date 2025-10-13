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
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "Shit",
      href: "https://v0-yabosen-snowy-social-links.vercel.app/",
      icon: MessageSquare,
    },
  ],
  downloadLink: "https://pixeldrain.com/u/LwoeEj3r",
  donationLink: "#",
  backgroundUrl: "",
};
