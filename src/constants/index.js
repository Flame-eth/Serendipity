import {
  linkedLight,
  permutationLight,
  releaseLight,
  statusLight,
  uploadLight,
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
