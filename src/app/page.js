import AppHeader from "./components/header";
import noise from "../../public/noise-logo.svg";
import crop from "../../public/crop.svg";
import leaf from "../../public/leaf.svg";
import farmer from "../../public/farmer.svg";
import Image from "next/image";
import PortfolioCard from "./components/porfolio-card";
import AppPurpose from "./components/purpose";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-cabinet bg-base-white w-full overflow-hidden">
      <AppHeader />
      <AppPurpose />
    </main>
  );
}
