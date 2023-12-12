import AppHeader from "./components/header";
import noise from "../../public/noise-logo.svg";

import Image from "next/image";
import AppPurpose from "./components/purpose";

import AppPreview from "./components/app-preview";
import chat from "../../public/chat.svg";
import lock from "../../public/lock.svg";
import PromiseCard from "./components/promise-card";
import AppPromise from "./components/app-promise";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-cabinet bg-base-white w-full overflow-hidden">
      <AppHeader />
      <AppPurpose />
      <AppPreview />
      <AppPromise />
      <div className="bg-lime-50 py-[16px] w-full">
        <strong className="text-center mb-5 text-lime-950 text-2xl font-extrabold font-cabinet lg:text-5xl lg:leading-[60px] tracking-wide my-[20px]">
          Answers to most Asked Questions
        </strong>

        <div className="h-[203px] px-[85px] py-11 bg-yellow-300 rounded-tl-[40px] rounded-tr-[40px] rounded-bl-2xl rounded-br-2xl border border-lime-950 border-opacity-20 flex-col justify-start items-start gap-2.5 inline-flex mx-[80px] transition-[width] ease-in-out delay-150 hover:h-[300px] hover:bg-red-300">
          <div className="h-[120px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-lime-950 text-[32px] font-bold font-['Cabinet Grotesk'] leading-[44px]">Do I need the app to use these features?</div>
            <div className="self-stretch text-neutral-800 text-xl font-medium font-['Cabinet Grotesk'] leading-[30px]">Farmiz is a licensed Financial Institution so your funds are fully safeguarded by law. Your account and operations are protected by 3D-Secure and Strong Customer Authentification technologies.</div>
          </div>
        </div>
      </div>

    </main>
  );
}
