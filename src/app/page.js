import AppHeader from "./components/header";
import noise from "../../public/noise-logo.svg";
import crop from "../../public/crop.svg";
import leaf from "../../public/leaf.svg";
import farmer from "../../public/farmer.svg";
import Image from "next/image";
import PortfolioCard from "./components/porfolio-card";
import AppPurpose from "./components/purpose";

import appleFill from '../../public/apple-fill.svg'
import playFill from '../../public/play-fill.svg'
import dashboard from '../../public/dashboard.png'
import Selector from "./components/selector-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-cabinet bg-base-white w-full overflow-hidden">
      <AppHeader />
      <AppPurpose />
      <div className="bg-slate-800 w-full px-[16px] gap-5 flex flex-col py-10 lg:py-[50px]">
        <div className="w-[358px] lg:w-[842px]"><span className="text-white text-2xl font-extrabold font-cabinet lg:text-5xl">Investing in a<br /></span><span className="text-lime-300 text-2xl font-extrabold font-cabine lg:text-5xl">sustainable</span><span className="text-white text-2xl font-extrabold font-cabinet lg:text-5xl"> future</span></div>
        <div className="w-full flex justify-end">
          <p className="self-stretch lg:w-[400px] text-right text-lime-50 text-sm font-medium font-cabinet leading-tight">Farmiz helps you make the best agricultural-related investment decisions and achieve lasting financial success.</p>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="w-28 h-12 bg-lime-50 rounded-lg border border-white border-opacity-20 justify-center items-center inline-flex">
            <div className="flex flex-1 justify-evenly">
              <Image src={appleFill} alt="leaf" />
              <div
                className="inline-block  min-h-[1em] w-0.5 self-stretch bg-slate-800 opacity-100 dark:opacity-50"></div>
              <Image src={playFill} alt="leaf" />
            </div>
          </div>
        </div>
        <Selector />
        {/* <div className="w-full flex items-center justify-center">
          <Image src={dashboard} alt="Dashboard" className="w-[70%]  object-cover" />
        </div>
        <div className="text-lime-300 text-lg font-bold font-cabinet leading-normal">DASHBOARD</div>
        <div className="text-lime-50 text-lg font-bold font-cabinet leading-relaxed">View your farmiz balance, portfolio health, and investing action, all from one place.</div> */}
      </div>
    </main>
  );
}
