import { File, Square } from "lucide-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Siddharth Verma Assignment - E-Commerce",
  description:
    "Siddharth Verma Assignment - E-Commerce. This is my submission for StrategyWerks",
  mainNav: [
    {
      title: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/sv-siddharth/",
      icon: Square,
    },
    {
      title: "Github Code",
      href: "https://github.com/sv-siddharth/Siddharth-Verma-StrategyWerks",
      icon: File,
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};