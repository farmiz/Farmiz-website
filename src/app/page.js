"use client"

import AppHeader from "./components/header";
import noise from "../../public/noise-logo.svg";

import Image from "next/image";
import AppPurpose from "./components/purpose";

import AppPreview from "./components/app-preview";
import chat from "../../public/chat.svg";
import lock from "../../public/lock.svg";
import PromiseCard from "./components/promise-card";
import AppPromise from "./components/app-promise";
import OpenCards from "./components/slider";
import AppFAQ from "./components/app-faq";
import apple from "../../public/apple.svg";
import play from "../../public/play.svg";
import AppButton from "./components/app-button";
import file from "../../public/file.png";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-cabinet bg-base-white w-full overflow-hidden">
      <AppHeader />
      <AppPurpose />
      <AppPreview />
      <AppPromise />
      <AppFAQ />
      <div className="bg-custom-lime w-full flex">
        <div className="flex flex-col">
        <div className="w-[411px] text-lime-50 text-[32px] font-bold font-cabinet leading-[44px]">Ready to put your<br />funds to work?</div>
        <div className='flex lg:justify-end justify-between py-6 px-[16px] gap-2'>
          <AppButton path={apple} text="Apple App Store" />
          <AppButton path={play} text="Google Play Store" />

        </div>
        </div>
        <Image src={file} alt="Picture of the author" width={500} height={500} />
      </div>



    </main>
  );
}
