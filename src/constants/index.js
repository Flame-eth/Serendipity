import {
  buttonL1,
  buttonL2,
  buttonL3,
  cardL1,
  cardL2,
  cardL3,
  linkedDark,
  linkedLight,
  permutationLight,
  polygonL1,
  polygonL2,
  polygonL3,
  releaseDark,
  releaseLight,
  statusDark,
  statusLight,
  uploadDark,
  uploadLight,
  permutationDark,
  cardD1,
  cardD2,
  cardD3,
  buttonD1,
  buttonD2,
  buttonD3,
  PolygonD1,
  PolygonD2,
  PolygonD3,
} from "../assets";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Browse",
    path: "/browse",
  },
  {
    name: "Updates",
    path: "/updates",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
];

export const updatesListLight = [
  {
    title: "Upload Image",
    description: "New Feature: April 21, 2023",
    image: uploadLight,
  },
  {
    title: "Permutation",
    description: "New Feature: April 19, 2023",
    image: permutationLight,
  },
  {
    title: "Status Page",
    description: "New Feature: April 16, 2023",
    image: statusLight,
  },
  {
    title: "V2.1 Release",
    description: "New Feature: April 14, 2023",
    image: releaseLight,
  },
  {
    title: "Linked Roles",
    description: "New Feature: April 11, 2023",
    image: linkedLight,
  },
];

export const updatesListDark = [
  {
    title: "Upload Image",
    description: "New Feature: April 21, 2023",
    image: uploadDark,
  },
  {
    title: "Permutation",
    description: "New Feature: April 19, 2023",
    image: permutationDark,
  },
  {
    title: "Status Page",
    description: "New Feature: April 16, 2023",
    image: statusDark,
  },
  {
    title: "V2.1 Release",
    description: "New Feature: April 14, 2023",
    image: releaseDark,
  },
  {
    title: "Linked Roles",
    description: "New Feature: April 11, 2023",
    image: linkedDark,
  },
];

export const cardLight = [
  {
    title: "Using Discord",
    subtitle: "Mastering the Art of Prompt Writing",
    description:
      "Prompt writing involves crafting clear and engaging prompts, while using images to create a visual representation of the idea or concept.",
    bg: cardL1,
    buttonIcon: buttonL1,
    buttonText: "Join Discord",
    icon: polygonL1,
  },
  {
    title: "Getting Started",
    subtitle: "Streaming Collaborative Workflows",
    description:
      "Use the Midjourney Bot on Discord to effortlessly generate designs and artworks for your project. Simply enter a command and the bot will respond with a prompt or image...",
    bg: cardL2,
    buttonIcon: buttonL2,
    buttonText: "Explore Now",
    icon: polygonL2,
  },
  {
    title: "User Guide",
    subtitle: "Using the Midjourney Bot",
    description:
      "Explore key concepts like versions and parameters when using Midjourney. Versions refer to different variations of a design, allowing you to experiment ...",
    bg: cardL3,
    buttonIcon: buttonL3,
    buttonText: " View Documents",
    icon: polygonL3,
  },
];

export const cardDark = [
  {
    title: "Using Discord",
    subtitle: "Mastering the Art of Prompt Writing",
    description:
      "Prompt writing involves crafting clear and engaging prompts, while using images to create a visual representation of the idea or concept.",
    bg: cardD1,
    buttonIcon: buttonD1,
    buttonText: "Join Discord",
    icon: PolygonD1,
  },
  {
    title: "Getting Started",
    subtitle: "Streaming Collaborative Workflows",
    description:
      "Use the Midjourney Bot on Discord to effortlessly generate designs and artworks for your project. Simply enter a command and the bot will respond with a prompt or image...",
    bg: cardD2,
    buttonIcon: buttonD2,
    buttonText: "Explore Now",
    icon: PolygonD2,
  },
  {
    title: "User Guide",
    subtitle: "Using the Midjourney Bot",
    description:
      "Explore key concepts like versions and parameters when using Midjourney. Versions refer to different variations of a design, allowing you to experiment ...",
    bg: cardD3,
    buttonIcon: buttonD3,
    buttonText: " View Documents",
    icon: PolygonD3,
  },
];
