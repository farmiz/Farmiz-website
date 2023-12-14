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
import appleFill from "../../public/apple-fill.svg";
import playFill from "../../public/play-fill.svg";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-cabinet bg-base-white w-full overflow-hidden">
      <AppHeader />
      <AppPurpose />
      <AppPreview />
      <AppPromise />
      <AppFAQ />


      <div className="w-[1440px] h-[1024px] relative bg-custom-lime">
        <div className="left-[599px] top-[160px] absolute justify-start items-start inline-flex">
          <Image src={file} alt="Picture of the author" height={600} />
        </div>
        <div className="left-[80px] top-[150px] absolute flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-[411px] text-lime-50 text-[32px] font-bold  font-cabinet leading-[44px]">Ready to put your<br />funds to work?</div>
          <div className="justify-start items-start gap-6 inline-flex">
            <AppButton path={apple} text="Apple App Store" />
            <AppButton path={play} text="Google Play Store" />
          </div>
        </div>
        <div className="left-[80px] top-[631px] absolute flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-lime-50 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">Scan to download mobile app.</div>
          <div className="h-[183.58px] p-[17.46px] bg-white bg-opacity-5 rounded-2xl border border-white border-opacity-20 flex-col justify-start items-start gap-[6.98px] flex">
            <div className="w-[168.54px] h-[148.65px] relative" />
          </div>
        </div>
      </div>

      {/* End Here the Adss */}
      <div className="w-[1440px] h-[933px] px-20 pt-16 pb-12 bg-lime-300 flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch justify-end items-start gap-20 inline-flex">
          <div className="grow shrink basis-0 h-[255px] justify-end items-start gap-20 flex">
            <div className="pt-1 flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-lime-950 text-xl font-bold  font-cabinet leading-[30px]">Farmiz</div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">About us</div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">Features</div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">Help</div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">FAQs</div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">Resources</div>
              </div>
            </div>
            <div className="pt-1 flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-lime-950 text-xl font-bold  font-cabinet leading-[30px]">Legal</div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">License Overview</div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">Terms and condition</div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">Privacy</div>
              </div>
            </div>
            <div className="pt-1 flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-lime-950 text-xl font-bold  font-cabinet leading-[30px]">Follow Us</div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">Instagram</div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">Twitter</div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">LinkedIn</div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">Facebook</div>
              </div>
            </div>
            <div className="pt-1 flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-lime-950 text-xl font-bold  font-cabinet leading-[30px]">Get The App</div>
              <div className="w-28 h-12 bg-lime-950 rounded-lg border border-lime-800 border-opacity-20  justify-center items-center inline-flex">
                <div className="flex flex-1 justify-evenly">
                  <Image src={appleFill} alt="leaf" />
                  <div
                    className="inline-block  min-h-[1em] w-0.5 self-stretch bg-slate-800 opacity-100 dark:opacity-50"></div>
                  <Image src={playFill} alt="leaf" color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch text-center text-lime-950 text-[425px] font-black font-cabinet lowercase leading-[370px]">FARMIZ</div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="grow shrink basis-0 text-neutral-800 text-xl font-medium font-cabinet leading-[30px]">Farmiz is a financial technology company, not a bank. Banking services provided by partner banks, members FDIC.</div>
          <div><span className="text-lime-950 text-[22px] font-medium font-cabinet leading-[30px]">©</span><span className="text-lime-950 text-xl font-medium font-cabinet leading-[30px]"> 2023 Farmiz HQ</span></div>
        </div>
      </div>


    </main>
  );
}
