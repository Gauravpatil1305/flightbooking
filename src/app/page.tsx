import Home from "@/app/home/page";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function HomePage() {
  return (
    <div className={poppins.className}>
      <Home />
    </div>
  );
}
