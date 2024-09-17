import { FooterNavbarItem } from "@/types/types";

export const footerNavbarData: FooterNavbarItem[] = [
  {
    title: "Corporate",
    links: [
      { name: "About", icon: "material-symbols:home-pin-outline", path: "#" },
      { name: "Press/Media", icon: "material-symbols:flight-takeoff-rounded", path: "#" },
      { name: "People & Culture", icon: "material-symbols:flight-takeoff-rounded", path: "#" },
      { name: "Careers", icon: "material-symbols:airplane-ticket-outline-rounded", path: "#" }
    ]
  },
  {
    title: "Help",
    links: [
      { name: "Write to Us", icon: "material-symbols:workspace-premium-rounded", path: "#" },
      { name: "Frequently Asked Questions", icon: "material-symbols:campaign-rounded", path: "#" },
      { name: "Special Assistance", icon: "material-symbols:campaign-rounded", path: "#" },
      { name: "Contact", icon: "material-symbols:campaign-rounded", path: "#" }
    ]
  },
  {
    title: "Privacy & Security",
    links: [
      { name: "General Rules", icon: "material-symbols:help-outline-rounded", path: "#" },
      { name: "Passenger Rights", icon: "material-symbols:headphones-outline-rounded", path: "#" },
      { name: "Cookies", icon: "material-symbols:headphones-outline-rounded", path: "#" },
      { name: "Privacy", icon: "material-symbols:headphones-outline-rounded", path: "#" }
    ]
  }
];