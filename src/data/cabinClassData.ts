import { CabinClass } from "@/types/types";

export const cabinClassData: CabinClass[] = [
  {
    title: "Economy Class",
    image: "/img/cabin-class/economy.jpg",
    link: "/economy-class",
    features: [
      "Affordable fares",
      "Complimentary snacks",
      "In-flight entertainment",
    ],
  },
  {
    title: "Premium Class",
    image: "/img/cabin-class/premium.jpg",
    link: "/premium-class",
    features: ["Enhanced seating", "Additional baggage", "Dedicated check-in"],
  },
  {
    title: "Business Class",
    image: "/img/cabin-class/business.jpg",
    link: "/business-class",
    features: ["Priority boarding", "Extra legroom", "Exclusive meal options"],
  },
  {
    title: "First Class",
    image: "/img/cabin-class/first.jpg",
    link: "/first-class",
    features: ["Luxury seats", "Premium dining", "Personalized service"],
  },
];
