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


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-cabinet bg-base-white w-full overflow-hidden">
      <AppHeader />
      <AppPurpose />
      <AppPreview />
      <AppPromise />

      <div className="bg-red-500 py-[16px] w-full flex items-start flex-col">
        <strong className="text-center mb-5 text-lime-950 text-2xl font-extrabold font-cabinet lg:text-5xl lg:leading-[60px] tracking-wide">
          Answers to most Asked Questions
        </strong>
        <OpenCards />
      </div>

    </main>
  );
}
