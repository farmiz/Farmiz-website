import AppHeader from "./components/header";
import noise from "../../public/noise-logo.svg";
import crop from "../../public/crop.svg";
import leaf from "../../public/leaf.svg";
import farmer from "../../public/farmer.svg";
import Image from "next/image";
import PortfolioCard from "./components/porfolio-card";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-cabinet bg-base-white w-full">
      <AppHeader />
      <div className="w-full flex bg-lime-100 flex-col px-[16px]">
        <strong className="text-center text-lime-950 text-2xl font-extrabold font-cabinet">
          Invest with purpose and
          <br />
          reap fruitful rewards
        </strong>
        <p className="text-center text-neutral-800 text-base font-medium font-cabinet">
          From crop investments to financial planning, risk management, and
          global impact, Farmiz equips you with the tools to grow your wealth
          and cultivate a sustainable future.
        </p>
        <PortfolioCard heading={'Diversify Your Portfolio'} subheading={'Farmiz helps you diversify your investment portfolio seamlessly. By tapping into agriculture, you not only grow your wealth but also contribute to a more sustainable future.'} path={crop} color='bg-violet-300' />
        <PortfolioCard heading={'Simplified Agro-Investments'} subheading={'Farmiz simplifies agro-investments for you. Our user-friendly platform ensures that you effortlessly explore agricultural opportunities while we take care of the complexities.'} path={farmer} color='bg-amber-200' />
        <PortfolioCard heading={'Diversify Your Portfolio'} subheading={'Farmiz helps you diversify your investment portfolio seamlessly. By tapping into agriculture, you not only grow your wealth but also contribute to a more sustainable future.'} path={leaf} color='bg-teal-100'/>
      </div>
    </main>
  );
}
