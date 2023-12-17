"use client";
import AppHeader from "./components/header";
import Image from "next/image";
import AppPurpose from "./components/purpose";
import logo from "../../public/footer-logo.png";
import AppPreview from "./components/app-preview";
import AppPromise from "./components/app-promise";
import AppFAQ from "./components/app-faq";
import apple from "../../public/apple.svg";
import play from "../../public/play.svg";
import AppButton from "./components/app-button";
import file from "../../public/file.png";
import appleFill from "../../public/apple-fill.svg";
import playFill from "../../public/play-fill.svg";

export default function Home() {
  return (
    <main className="font-cabinet bg-base-white">
      <AppHeader />
      <AppPurpose />
      <AppPreview />
      <AppPromise />
      <AppFAQ />

      <div className="w-full lg:h-[1024px] bg-custom-lime p-5 lg:p-14">
        <div className="block lg:flex h-full bg-custom-lime items-center justify-between gap-20">
        <div className="flex flex-col justify-center flex-1 lg:h-[60%] my-10">
          {/* TEXT CONTENT */}
          <div className="flex flex-col justify-between h-full w-full items-center lg:items-start text-center lg:text-start">
            <div className="app lg:my-0 my-5">
              <div className="w-[411px] text-lime-50 text-[32px] font-bold  font-cabinet leading-[44px]">
                Ready to put your
                <br />
                funds to work?
              </div>
              <div className="lg:my-0 my-10">
                <AppButton path={apple} text="Apple App Store" />
                <AppButton path={play} text="Google Play Store" />
              </div>
            </div>

            <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-lime-50 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
              Scan to download mobile app.
            </div>
            <div className="h-[183.58px] p-[17.46px] bg-white bg-opacity-5 rounded-2xl border border-white border-opacity-20 flex-col justify-start items-start gap-[6.98px] flex">
              <div className="w-[168.54px] h-[148.65px] relative" />
            </div>
          </div>
          </div>

   
        </div>

        <div className="lg:h-[60%] flex items-center justify-center">
          <Image src={file} alt="Picture of the author" height={600}  className="lg:h-full"/>
        </div>
        </div>
      </div>


      <div className="w-full bg-lime-300 py-10">
        <div className="w-[95%] m-auto">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="logo mb-10">
          <Image src={logo} alt="Logo" width={100} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
            <div className="pt-1 flex-col justify-start items-start gap-8 flex">
              <div className="text-lime-950 text-xl font-bold font-cabinet leading-[30px]">
                Farmiz
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  About us
                </div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  Features
                </div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  Help
                </div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  FAQs
                </div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  Resources
                </div>
              </div>
            </div>
            <div className="pt-1 flex-col justify-start items-start gap-8 flex">
              <div className="text-lime-950 text-xl font-bold  font-cabinet leading-[30px]">
                Legal
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  License Overview
                </div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  Terms and condition
                </div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  Privacy
                </div>
              </div>
            </div>
            <div className="pt-1 flex-col justify-start items-start gap-8 flex">
              <div className="text-lime-950 text-xl font-bold  font-cabinet leading-[30px]">
                Follow Us
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  Instagram
                </div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  Twitter
                </div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  LinkedIn
                </div>
                <div className="text-lime-950 text-[17px] font-medium  font-cabinet leading-[25px] tracking-tight">
                  Facebook
                </div>
              </div>
            </div>
            <div className="pt-1 flex-col justify-start items-end gap-8 flex">
              <div className="text-lime-950 text-xl font-bold  font-cabinet leading-[30px]">
                Get The App
              </div>
              <div className="w-28 h-12 bg-lime-950 rounded-lg border border-lime-800 border-opacity-20  justify-center items-center flex">
                <div className="flex flex-1 justify-evenly">
                  <Image src={appleFill} alt="leaf" />
                  <Image src={playFill} alt="leaf" color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-lime-950 lg:text-[425px] md:text-[260px] text-[120px] font-black font-cabinet">
          farmiz
        </div>
        <div className="items-start gap-2 block lg:flex">
          <div className="grow shrink basis-0 text-neutral-800 lg:text-xl font-medium font-cabinet">
            Farmiz is a financial technology company, not a bank. Banking
            services provided by partner banks, members FDIC.
          </div>
          <div className="my-5">
            <span className="text-lime-950 lg:text-[22px] font-medium font-cabinet">
              ©
            </span>
            <span className="text-lime-950 lg:text-xl font-medium font-cabinet">
              2023 Farmiz HQ
            </span>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
